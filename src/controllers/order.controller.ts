import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  public service: OrderService;

  public constructor(service: OrderService = new OrderService()) {
    this.service = service;
  }

  public list = async (req: Request, res: Response) => {
    const result = await this.service.list();
    res.status(200).json(result);
  };
}

export default OrderController;
