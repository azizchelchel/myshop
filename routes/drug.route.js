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

router.post('/createDrug', jwtProtector, verifyPermission('PC789'), createDrug);        //create new drug
router.get('/getDrugs/:id', jwtProtector, getDrugById);                                 //get drug by id
router.get('/getDrugs', jwtProtector, getAllDrugs);                                     //get all drugs
router.delete('/deleteDrug/:id', jwtProtector, verifyPermission('PC321'), deleteDrug);  //delete drug 
router.put('/updateDrug', jwtProtector, verifyPermission('PC654'), updateDrug);         //update drug 

export default router;