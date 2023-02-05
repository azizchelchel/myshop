import  {getCart}  from '../controllers/cart.controller.js';
import express from "express"
import {jwtProtector} from './protectors/authProtector.js'


const router=express.Router();



router.get('/',jwtProtector,getCart )

export default router; 