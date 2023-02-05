import bodyParser from "body-parser";
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
router.post("/postSignup",bodyParser.urlencoded({ extended: true }),postSignup);

// verify received verification email route
router.get('/verify/:userId/:uniqueString', emailVerification)

// verified redirect route
router.get("/verified", (req,res,next) => {res.render('verified',{"message":"message"})
})

// sign in route
router.post("/postSignin", bodyParser.urlencoded({ extended: true }), postSignin);

// sign out route
router.all("/signout",signout);



export default router;
