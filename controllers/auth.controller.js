import { render } from "ejs";
import { connect } from "mongoose";
import {checkAndInsertUser,checkEmailPassword} from "../models/auth.model.js"





function postSignin (req,res,next){

  // get the info sent by user

  const user=req.body;

  if(user.username && user.email && user.password){

    // check in db if email already exists

    checkAndInsertUser(user)

    .then(
      (user) => {

        let username=user.username;

       res.render('loginPage',
       {message:`you have registered successfully ${username}`})
      }

    )
    .catch(

      (err) => { 
        if (err instanceof ReferenceError)
        {
          // ReferenceError
          res.render('signinPage',
          {message:'problem in registration  try agian.'})
        
       }else {
        if (err instanceof SyntaxError){

        console.log(err)

       }
       }
      }
    )

  } else{

    res.render('signinPage',
    {

      fillBlanks:'you must fill all blanks'

    });
  }

    
}


const postLogin=(req,res,next)=>{

  // fields not empty
  // get req.body
  // checkin db for email ---> compare passwords
  return new Promise((resolve,reject) => {

    const email=req.body.email;
    const password=req.body.password;

    console.log(`${email} et ${password}`)


     if(email&&password){
      
      checkEmailPassword(email,password)
      .then(
        (id) => { 

          console.log('you loged in ' +id)

          console.log(req.session)

          req.session.userId=id;

          console.log(req.session);

          res.redirect('/');
          
        }

      )
      .catch((err) => { 

        if(err==='invalidPass'||'unSignedup'){
            res.render('loginPage',
            {
              passMailIncorrect:'email or password is incorrect, retry'
            })

        }else{

            res.render('loginPage',
            {
              dbInfo:'database unreachable fetch your network connection'
            })
        }
       })

     }
     else{

      
      res.render('loginPage', 
      {
        fieldUmpty:'you must fillin all the fields, retry.'
      })
     }
  })



}

const getLoginPage = (req,res,next) => {
    

  res.render('loginPage',
  {message:'welcome'})
}


const getSigninPage = (req,res,next) => {

  //display signin page

  res.render('signinPage',{message: "please fill all blanks" });

    
}


 
  





const logout = (req,res,next) => {
    

  req.session.destroy(() => {
    console.log('destroyed')
    res.redirect('/')
  })
}



    


export { logout, getLoginPage , postSignin, getSigninPage, postLogin };