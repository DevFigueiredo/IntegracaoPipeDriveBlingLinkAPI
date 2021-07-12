import { Response } from 'express'
import { blingAPI } from '../../config'
import * as dotenv from 'dotenv'
import { AxiosError } from 'axios'

dotenv.config()

class OrderBlingServices {
  public async create (orderXML: string): Promise<Response> {
    try {
      const OrderBlings = (await blingAPI.post(
        `${process.env.API_BLING}/pedido/json/?xml=${orderXML}`
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
