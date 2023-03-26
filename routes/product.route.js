import express from "express";
import {jwtProtector} from './protectors/authProtector.js';
import {
    getProductById,
    getAllProducts,
    deleteProduct,
    createProduct
} from "../controllers/product.controller.js";
import {verifyPermission} from './protectors/verifyPermissions.js';

const router=express.Router();

router.post('/createProduct', createProduct);    //(, jwtProtector, verifyPermission('PC789'))create new product
router.get('/getProducts/:id', getProductById);                                           //get product by id
router.get('/getProducts', getAllProducts);                                               //get all products
router.put('/deleteProduct/:id', jwtProtector, verifyPermission('PC321'), deleteProduct); //delete product 

export default router;