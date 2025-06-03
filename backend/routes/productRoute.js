import express from 'express'
import { addProduct, listProduct, removeProduct, singleProduct} from '../controllers/productController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add', adminAuth, upload.fields([{name: 'image1', macCount: 1}, {name: 'image2', macCount: 2}, {name: 'image3', macCount: 3},{name: 'image4', macCount: 4}]), addProduct)
productRouter.post('/remove', adminAuth, removeProduct)
productRouter.get('/list', listProduct)
productRouter.post('/single', singleProduct)

export default productRouter