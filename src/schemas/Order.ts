import * as mongoose from 'mongoose'

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
      blingorderSended: boolean
    }
}

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

export const OrderModel = mongoose.model<OrderInterface>('Order', Order)
