import express from "express";
import {jwtProtector} from '../middlewares/protectors/authProtector.js';
import {
    getProductById,
    getAllProducts,
    deleteProduct,
    createProduct
} from "../controllers/product.controller.js";
import {verifyPermission} from '../middlewares/protectors/verifyPermissions.js';
import {auditTrailMiddleware} from '../middlewares/audit/audit.js'

const router=express.Router();

router.post('/createProduct',
            verifyPermission('PC456'),
            auditTrailMiddleware,
            createProduct
            );    //(, jwtProtector, verifyPermission('PC789'))create new product
router.get('/getProducts/:id',
            auditTrailMiddleware,
            getProductById
            );                                           //get product by id
router.get('/getProducts',
            auditTrailMiddleware,
            getAllProducts
            );                                               //get all products
router.put('/deleteProduct/:id', 
            jwtProtector,
            auditTrailMiddleware,
            verifyPermission('PC789'), 
            deleteProduct); //delete product 

export default router;