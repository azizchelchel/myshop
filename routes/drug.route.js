import express from "express";
import {jwtProtector} from './protectors/authProtector.js'
import {
    createDrug,
    deleteDrug,
    getAllDrugs,
    getDrugById
} from "../controllers/drug.controller.js";
const router=express.Router();

router.post('/createDrug', createDrug);  //create new drug
router.get('/getDrugs/:id', getDrugById);              //get drug by id
router.get('/getDrugs', getAllDrugs);                  //get all drugs
router.put('/deleteDrug/:id', deleteDrug);             //delete drug 

export default router;