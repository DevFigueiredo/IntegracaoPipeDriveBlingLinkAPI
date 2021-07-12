import { Router } from 'express'
import { OrderController } from './controllers/OrderController'

const routes = Router()

const orderController = new OrderController()

routes.get('/orders', orderController.index)
// routes.post('/users', UserController.store)

export default routes
