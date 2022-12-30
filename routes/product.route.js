import express from "express";

import getProduct from "../controllers/product.controller.js";

const router=express.Router();


console.log('route')


router.get('/product/:id', getProduct )

console.log('apres')

export default router;