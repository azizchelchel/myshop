import express from "express";
import {
  postSignup,
  postSignin,
  signout
} from "../controllers/auth.controller.js";
import {emailVerification} from '../models/auth.model.js'
import {jwtProtector} from './protectors/authProtector.js'

const router = express.Router();

// sign up route
router.post("/postSignup",postSignup);

// verify received verification email route
router.get('/verify/:userId/:uniqueString', emailVerification)

// verified redirect route
router.get("/verified", (req,res,next) => {res.render('verified',{"message":"message"})
})

// sign in route
router.post("/postSignin", postSignin);

// sign out route
router.all("/signout", jwtProtector, signout);



export default router;
