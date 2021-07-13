import { Router } from 'express'
import { OrderController } from './controllers/OrderController'

const routes = Router()

const orderController = new OrderController()

routes.post('/orders', orderController.store)
routes.get('/orders', orderController.index)

export default routes
