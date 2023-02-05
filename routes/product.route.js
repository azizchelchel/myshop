import express from "express";
import {getProductById,getFirstProduct} from "../controllers/product.controller.js";
const router=express.Router();

// get first product in db for "/product/"
router.get('/',getFirstProduct )
// get product by id
router.get('/:id',      getProductById )

export default router;