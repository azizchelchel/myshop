import bodyParser from "body-parser";
import express from "express";
import { check } from "express-validator";

import {
  postSignin,
  postLogin,
  logout,
  getLoginPage,
  getSigninPage,
} from "../controllers/auth.controller.js";

import {isAuth,isNotAuth} from './protectors/auth.protector.js'

const router = express.Router();

// display signin page

router.get("/signinPage",isNotAuth,
bodyParser.urlencoded({ extended: true }),
getSigninPage
);

// signin route

router.post(
  "/postSignin",isNotAuth,
  bodyParser.urlencoded({ extended: true }),
  check("username").not().isEmpty().withMessage('username must be at least one character'),
  check("email").isEmail().withMessage('write a valid email'),
  check("password").isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
  check("confirmPassword").custom((value, { req }) => {
    if (value === req.body.password) return true;
    else throw "password dont match";
  }).withMessage('password dont match'),
  postSignin
);

// get login Page route

router.get("/getLoginPage",isNotAuth ,getLoginPage);

// login route

router.post("/login", isNotAuth, bodyParser.urlencoded({ extended: true }),
check("email").isEmail().withMessage('email or password is incorrect'),
check("password").isLength({ min: 8,max:40 }).withMessage('email or password is incorrect'),
postLogin);

// logout route



router.all("/logout",isAuth,logout);



export default router;
