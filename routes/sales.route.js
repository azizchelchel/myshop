import express from "express";
import {jwtProtector} from './protectors/authProtector.js';
import {addSale, getSalesByUserId, getSales, getSalesByDate} from '../controllers/sales.controller.js';

const router=express.Router();

router.post('/addSale', addSale);               // create a sale
router.get('/getSales/:id', getSalesByUserId);  // get sales by user id
router.get('/getSales', getSales);              // get all the sales
router.get('/getSalesByDate', getSalesByDate);  // get sales by purchase date 



export default router;