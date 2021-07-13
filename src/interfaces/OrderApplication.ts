export interface OrderApplication {
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
