import express from "express";
import {
  postSignup,
  postSignin,
  signout
} from "../controllers/auth.controller.js";
import {emailVerification} from '../models/auth.model.js';
import {jwtProtector} from './protectors/authProtector.js';

const router = express.Router();

router.post("/postSignup", postSignup);                          // sign up route
router.post("/postSignin", postSignin);                          // sign in route
router.all("/signout", jwtProtector, signout);                   // sign out route
router.get('/verify/:userId/:uniqueString', emailVerification);  // verify received verification email route

export default router;
