import render from "ejs";
import connect from "mongoose";
import {
  checkAndInsertUser,
  checkEmailPassword,
} from "../models/auth.model.js";
import { validationResult } from "express-validator";

// send signin credentials

const postSignin = (req, res, next) => {
  // return console.log(validationResult(req));
  // get the info sent by user
  if (validationResult(req).isEmpty()) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // data validation

    checkAndInsertUser(username, email, password)
      .then((user) => {
        res.render("loginPage", {
          message: `you have registered successfully ${user.username}`,
          isUser:req.session.userId
        });
      })
      .catch((err) => {
        req.flash("signinError", err);
        res.render("signinPage",
         { signinError: req.flash("signinError")[0],
        isUser:req.session.userId });
      });
  } else {

    console.log('not empty')
    req.flash("validationErrors", validationResult(req).array());
    console.log(validationResult(req).array()[0].param)
    res.redirect("/auth/signinPage");
  }
};

// post login credentials

const postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  

 if (validationResult(req).isEmpty()){

    
    checkEmailPassword(email, password)
      .then((id) => {
        // add userId=id property to the session

        req.session.userId = id;

        // redirect to home('/')

        res.redirect("/");
      })
      .catch((err) => {
        req.flash("autherror", err);
        res.render("loginPage", {
          autherror: req.flash("autherror")[0],
          isUser:req.session.userId
        });
      });

    }else{

      console.log('not empty')
      req.flash("loginErrors", validationResult(req).array());
      
      res.redirect('/auth/getLoginPage')
    }
  
};

// get login page

const getLoginPage = (req, res, next) => {

  res.render("loginPage", {
    autherror: req.flash("autherror")[0],
    loginErrors:req.flash('loginErrors'),
    isUser:req.session.userId
   
  });
};

// get signin page

const getSigninPage = (req, res, next) => {
  //display signin page

  res.render("signinPage", {
    signinPage: req.flash("autherror")[0],
    validationErrors: req.flash("validationErrors"),
    isUser:req.session.userId
   

  });
};

// logout

const logout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

export { postSignin, logout, postLogin, getLoginPage, getSigninPage };
