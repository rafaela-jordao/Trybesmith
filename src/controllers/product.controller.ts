import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  public service: ProductService;

  constructor(service: ProductService = new ProductService()) {
    this.service = service;
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.service.create(product);
    res.status(201).json(productCreated);
  };
}

export default ProductController;