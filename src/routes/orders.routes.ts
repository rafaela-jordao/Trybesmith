import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const ordersRouter = Router();

const orderController = new OrderController();

ordersRouter.get('/orders', orderController.list);

export default ordersRouter;