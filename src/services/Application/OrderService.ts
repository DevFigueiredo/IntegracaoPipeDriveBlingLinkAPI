import { OrderModel } from '../../schemas/Order'
import * as dotenv from 'dotenv'
import { OrderApplication } from '../../interfaces/OrderApplication'

dotenv.config()

class OrderServices {
  public async store (order: OrderApplication):Promise<void> {
    try {
      const orderModel = new OrderModel(order)
      await orderModel.save()
    } catch (error) {
      console.log(error._message)
    }
  }
  public async index (): Promise<OrderApplication[]> {
    try {
      const orders = await OrderModel.find()
      return orders
    } catch (error) {
      console.log(error._message)
    }
  }
}

export { OrderServices }
