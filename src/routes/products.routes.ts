import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.post('/products', productController.create);

export default productsRouter;
