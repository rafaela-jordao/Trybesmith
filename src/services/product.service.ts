import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class ProductService {
  public productModel: ProductModel;

  constructor(model: ProductModel = new ProductModel(connection)) {
    this.productModel = model;
  }

  public create(product: Product): Promise<Product> {
    return this.productModel.create(product);
  }
}

export default ProductService;
