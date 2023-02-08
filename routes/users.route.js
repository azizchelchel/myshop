import express from "express";
import {createUser, deleteUser} from '../controllers/users.controller.js';
import {jwtProtector} from './protectors/authProtector.js';
const router = express.Router();

router.post('/createUser', jwtProtector, createUser);  //create new user
router.put('/deleteUser', jwtProtector, deleteUser);   //delete user

export default router;