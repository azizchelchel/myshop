import express from "express";
import {jwtProtector} from '../middlewares/protectors/authProtector.js'
import {
    updateDrug,
    createDrug,
    deleteDrug,
    getAllDrugs,
    getDrugById
} from "../controllers/drug.controller.js";
import {verifyPermission} from '../middlewares/protectors/verifyPermissions.js';
import {auditTrailMiddleware} from '../middlewares/audit/audit.js';

const router=express.Router();

router.post('/createDrug',
             jwtProtector,
             verifyPermission('PC456'),
             auditTrailMiddleware,
             createDrug
             );      //(jwtProtector, verifyPermission('PC789'),)create new drug
router.get('/getDrugs/:id',
            auditTrailMiddleware,
            getDrugById
            );                                 //get drug by id
router.get('/getDrugs', 
            auditTrailMiddleware,
            getAllDrugs
            );                                     //get all drugs
router.delete('/deleteDrug/:id', 
                jwtProtector,
                verifyPermission('PC789'),
                auditTrailMiddleware, 
                deleteDrug
                );        // verifyPermission('PC321')delete drug 
router.put('/updateDrug', 
            jwtProtector, 
            verifyPermission('PC789'),
            auditTrailMiddleware,
            updateDrug
            );         //verifyPermission('PC654')update drug 

export default router;