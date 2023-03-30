import express from "express";
import {
  postSignup,
  postSignin,
  signout
} from "../controllers/auth.controller.js";
import {emailVerification} from '../models/auth.model.js';
import {jwtProtector} from '../middlewares/protectors/authProtector.js';
import {auditTrailMiddleware} from '../middlewares/audit/audit.js';

const router = express.Router();

router.post("/postSignup",
            auditTrailMiddleware, 
            postSignup
            );                          // sign up route
router.post("/postSignin",
            auditTrailMiddleware,
            postSignin
            );                          // sign in route
router.all("/signout", 
            jwtProtector,
            auditTrailMiddleware, 
            signout
            );                   // sign out route
router.get('/verify/:userId/:uniqueString',
            auditTrailMiddleware,
            emailVerification
            );  // verify received verification email route

export default router;
