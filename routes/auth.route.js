import express from "express";

import { getSigninPage, postSignin, getLoginPage, postLogin, logout   } from '../controllers/auth.controller.js'

const router=express.Router();


// display signin page

router.get('/signinPage', getSigninPage);

// signin route

router.post('/postSignin', postSignin);


// loginPage route

router.get('/getLoginPage', getLoginPage);


// login route

router.post('/login', postLogin);


// logout route

router.all('/logout', logout);



export default router;