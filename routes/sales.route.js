import express from "express";
import {jwtProtector} from '../middlewares/protectors/authProtector.js';
import {addSale, 
        getSalesByUserId, 
        getSales, 
        getSalesByDate
        } from '../controllers/sales.controller.js';
import {auditTrailMiddleware} from '../middlewares/audit/audit.js';
import {verifyPermission} from '../middlewares/protectors/verifyPermissions.js'


const router=express.Router();

router.post('/addSale',
            jwtProtector,
            verifyPermission('PC456'), 
            auditTrailMiddleware,
            addSale);               // create a sale
router.get('/getSales/:id', 
            jwtProtector, 
            auditTrailMiddleware,
            getSalesByUserId
            );  // get sales by user id
router.get('/getSales',
            jwtProtector, 
            auditTrailMiddleware,
            getSales
            );              // get all the sales
router.get('/getSalesByDate', 
            jwtProtector, 
            auditTrailMiddleware,
            getSalesByDate
            );  // get sales by purchase date 



export default router;