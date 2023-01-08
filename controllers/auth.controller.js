import { render } from "ejs";
import { connect } from "mongoose";
import {checkAndInsertUser,checkEmailPassword} from "../models/auth.model.js"


// send signin credentials

const postSignin =(req,res,next)=>{

  // get the info sent by user

  const user=req.body;

  if(user.username && user.email && user.password){

    // check in db if email already exists

    checkAndInsertUser(user)

    .then(
      (user) => {
        res.render('loginPage',
        {message:`you have registered successfully ${user.username}`
        })
      }

    )
    .catch(

      (err) => { 
      
        req.flash("signinError", err)
        res.render('signinPage',
        {signinError:req.flash('signinError')[0]})
      }
    )

  } else{

    res.render('signinPage',
    {

      signinError:'you must fill all the fields'

    });
  }

    
}

// post login credentials

const postLogin=(req,res,next)=>{

// fields not empty
// get req.body
// checkin db for email ---> compare passwords

const email=req.body.email;
const password=req.body.password;

if(email&&password){
      
  checkEmailPassword(email,password)
  .then(
    (id) => {
      // add userId=id property to the session

          req.session.userId=id;

          // redirect to home('/')

          res.redirect('/');
          
        }
      )
      .catch((err) => { 
        req.flash("autherror",err);

        res.render('loginPage',
        {autherror:req.flash('autherror')[0]})
      })

}
else{      
  res.render('loginPage', 
  {
    autherror:'you must fillin all the fields, retry.'
  })
  }
}


// get login page

const getLoginPage = (req,res,next) => {

  res.render('loginPage',
  {
    autherror:req.flash('autherror')[0]
  })
}

// get signin page

const getSigninPage = (req,res,next) => {

  //display signin page

  res.render('signinPage',{signinPage: req.flash("autherror")[0] });
}

// logout

const logout = (req,res,next) => {

  req.session.destroy(() => {
    res.redirect('/')
  })
}



export {postSignin, logout, postLogin, getLoginPage, getSigninPage};