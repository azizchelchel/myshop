import  getHome  from '../controllers/home.controller.js';
import express from "express"
import { jwtProtector } from './protectors/authProtector.js';
const router=express.Router();


router.get('/',jwtProtector,getHome )

export default router; 