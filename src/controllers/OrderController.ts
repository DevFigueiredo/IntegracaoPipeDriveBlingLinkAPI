/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { DealPipeDriveServices } from '../services/PipeDrive/DealPipeDriveServices'
import { OrderBlingServices } from '../services/Bling/OrderBlingServices'
import { OrderServices } from '../services/Application/OrderService'
import { OrderInterface } from '../schemas/Order'
dotenv.config()
interface Deal {
id?: string
title?: string
value?: string
org_name?: string
owner_name?: string
person_name?: string
weighted_value_currency?: string,
weighted_value: string
}

class OrderController {
  public async store (request: Request, response: Response): Promise<Response> {
    const params = request.query
    const status: string = 'won' || params.status as string

    try {
      const dealPipeDriveService = new DealPipeDriveServices()

      const orderBlingService = new OrderBlingServices()

      const deals = await dealPipeDriveService.find(status)
      if (!deals) {
        return response.status(401).json({ messageError: 'Não foi possível conectar-se ao servidor do PipeDrive' })
      }
      const promises = deals.data.forEach(async deal => {
        const orderBling = {
          name: deal.owner_name,
          code: deal.id,
          title: deal.title,
          unitValue: deal.value
        }
        const orderBlingSended = await orderBlingService.store(orderBling)
        const blingorderSended = !!orderBlingSended

        if (!blingorderSended) {
          return response.status(401).json({ messageError: 'Não foi possível conectar-se ao servidor do Bling' })
        }

        const Order: OrderInterface = {
          idOrder: deal.id,
          customer: {
            company: deal.org_name,
            contactPerson: deal.person_name
          },
          item: {
            code: orderBling.code,
            description: deal.title,
            currency: deal.weighted_value_currency,
            totalValue: deal.weighted_value,
            blingorderSended: blingorderSended
          }
        }
        const orderService = new OrderServices()
        const order = orderService.store(Order)
        if (!order) {
          return response.status(401).json({ messageError: 'Não foi possível salvar os dados no banco da integração - MongoDB' })
        }
      })
      await Promise.all(promises)

      return response.json(deals)
    } catch (error) {
      return response.status(401).json({ messageError: error.message })
    }
  }

  public async index (request: Request, response: Response): Promise<Response> {
    const orderService = new OrderServices()
    const orders = await orderService.index()
    return response.json(orders)
  }
}

export { OrderController }
