import { OrderInterface, OrderModel } from '../../schemas/Order'
import * as dotenv from 'dotenv'

dotenv.config()

class OrderServices {
  public async create (order: OrderInterface):Promise<void> {
    try {
      const orderModel = new OrderModel(order)
      await orderModel.save()
    } catch (error) {
      console.log(error)
    }
  }
}

export { OrderServices }
