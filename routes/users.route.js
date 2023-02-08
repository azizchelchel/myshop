import express from "express";
import {createUser, deleteUser} from '../controllers/users.controller.js';
import {jwtProtector} from './protectors/authProtector.js';
const router = express.Router();


// create new user
router.post('/createUser',jwtProtector , createUser);

// delete user
router.put('/deleteUser',jwtProtector , deleteUser);




export default router;