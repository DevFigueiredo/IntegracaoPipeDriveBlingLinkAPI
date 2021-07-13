import * as mongoose from 'mongoose'
import { OrderApplication } from '../interfaces/OrderApplication'

const Order = new mongoose.Schema(
  {
    idOrder: { type: String, unique: true },
    customer: {
      company: { type: String },
      contactPerson: { type: String }
    },
    item: {
      code: { type: String, unique: true },
      description: { type: String },
      currency: { type: String },
      totalValue: { type: Number },
      blingorderSended: { type: Boolean }
    }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

export const OrderModel = mongoose.model<OrderApplication>('Order', Order)
