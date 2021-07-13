import { Response } from 'express'
import { blingAPI } from '../../config'
import * as dotenv from 'dotenv'
import { AxiosError } from 'axios'
import { convertDealToXml } from '../../utils/xmlConverter/DealXML'

dotenv.config()

interface OrderBling{
    name: string
    code: string
    title: string
    unitValue: string
  }

class OrderBlingServices {
  public async store (orderXML: OrderBling): Promise<Response> {
    try {
      const orderBlingXML = convertDealToXml(orderXML)

      const OrderBlings = (await blingAPI.post(
        `${process.env.API_BLING}/pedido/json/?xml=${orderBlingXML}`
      )).data

      return OrderBlings
    } catch (error) {
      const err = error as AxiosError
      console.log(err.response.status)
      console.log(err.response.data.retorno.erros)
    }
  }
}

export { OrderBlingServices }
