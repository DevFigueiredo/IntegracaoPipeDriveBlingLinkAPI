import { OrderModel, OrderInterface } from '../../schemas/Order'
import * as dotenv from 'dotenv'

dotenv.config()

class OrderServices {
  public async store (order: OrderInterface):Promise<void> {
    try {
      const orderModel = new OrderModel(order)
      await orderModel.save()
    } catch (error) {
      console.log(error._message)
    }
  }
  public async index (): Promise<OrderInterface[]> {
    try {
      const orders = await OrderModel.find()
      return orders
    } catch (error) {
      console.log(error._message)
    }
  }
}

export { OrderServices }
