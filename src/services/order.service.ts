import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';

class OrderService {
  public orderModel: OrderModel;

  constructor(model: OrderModel = new OrderModel(connection)) {
    this.orderModel = model;
  }

  public async list(): Promise<Order[]> {
    const orders = await this.orderModel.list();
    return orders as Order[];
  }
}

export default OrderService;
