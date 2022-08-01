import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

class OrderModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  public async list(): Promise<Order[]> {
    const sql = `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds 
    FROM Trybesmith.Orders AS O 
    INNER JOIN Trybesmith.Products AS P ON O.id = P.orderId
    GROUP BY O.id 
    ORDER BY O.userId ASC`;
    const [result] = await this.connection.execute(sql);
    return result as Order[];
  }
}

// JSON_ARRAYAGG retorna o conjunto de resultados como uma única matriz JSON.
// https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg

export default OrderModel;