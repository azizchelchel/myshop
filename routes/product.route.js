import express from "express";
import {jwtProtector} from './protectors/authProtector.js'
import {
    getProductById,
    getAllProducts,
    deleteProduct,
    createProduct
} from "../controllers/product.controller.js";
const router=express.Router();

router.post('/createProduct', jwtProtector, createProduct);  //create new product
router.get('/getProducts/:id', getProductById);              //get product by id
router.get('/getProducts', getAllProducts);                  //get all products
router.put('/deleteProduct/:id', deleteProduct);             //delete product 

export default router;