import  {getCart}  from '../controllers/cart.controller.js';
import express from "express"
import {isAuth} from './protectors/auth.protector.js'


const router=express.Router();



router.get('/',isAuth,getCart )

export default router; 