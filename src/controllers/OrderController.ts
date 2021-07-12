/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { DealPipeDriveServices } from '../services/PipeDrive/DealPipeDriveServices'
import { OrderBlingServices } from '../services/Bling/OrderBlingServices'
import { convertDealToXml } from '../utils/xmlConverter/DealXML'
import { OrderServices } from '../services/Application/OrderService'
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
  public async index (request: Request, response: Response): Promise<Response> {
    const params = request.query
    const status: string = params.status as string

    try {
      const dealPipeDriveService = new DealPipeDriveServices()

      const orderBlingService = new OrderBlingServices()

      const deals = await dealPipeDriveService.find(status)

      const promises = deals.data.forEach(async deal => {
        const orderBling = {
          name: deal.owner_name,
          code: deal.id,
          title: deal.title,
          unitValue: deal.value
        }
        const dealXML = convertDealToXml(orderBling)

        const orderBlingSended = await orderBlingService.create(dealXML)
        const blingorderSended = !!orderBlingSended

        const Order = {
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
        orderService.create(Order)
      })
      await Promise.all(promises)

      return response.json(deals)
    } catch (error) {
      console.log(error)
    }
  }

  public async create (request: Request, response: Response): Promise<Response> {
    return response.json({ })
  }
}

export { OrderController }
