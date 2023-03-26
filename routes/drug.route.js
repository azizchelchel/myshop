import express from "express";
import {jwtProtector} from './protectors/authProtector.js'
import {
    updateDrug,
    createDrug,
    deleteDrug,
    getAllDrugs,
    getDrugById
} from "../controllers/drug.controller.js";
import {verifyPermission} from './protectors/verifyPermissions.js';

const router=express.Router();

router.post('/createDrug',  createDrug);        //(jwtProtector, verifyPermission('PC789'),)create new drug
router.get('/getDrugs/:id', getDrugById);                                 //(, jwtProtector)get drug by id
router.get('/getDrugs',  getAllDrugs);                                     //(jwtProtector,)get all drugs
router.delete('/deleteDrug/:id',  deleteDrug);  //(jwtProtector, verifyPermission('PC321'),)delete drug 
router.put('/updateDrug',  updateDrug);         //(jwtProtector, verifyPermission('PC654'),)update drug 

export default router;