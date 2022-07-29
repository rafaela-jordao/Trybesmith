import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.post('/products', productController.create);
productsRouter.get('/products', productController.list);

export default productsRouter;
