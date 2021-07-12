import { Schema, model } from 'mongoose'

export interface OrderInterface {
  idOrder: string
    customer: {
      company: string
      contactPerson: string
    },
    item: {
      code: string
      description: string
      currency: string
      totalValue: number
      blingorderSended: number
    }
}

const Order = new Schema(
  {
    idOrder: { type: String, required: true, unique: true },
    customer: {
      company: { type: String, required: true },
      contactPerson: { type: String, required: true }
    },
    item: {
      code: { type: String, required: true, unique: true },
      description: { type: String, required: true },
      currency: { type: String, required: true },
      totalValue: { type: Number, required: true },
      blingorderSended: { type: Boolean, required: true }
    }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

export const OrderModel = model<OrderInterface>('Order', Order)
