import {
  checkAndInsertUser,
  checkEmailPassword
} from "../models/auth.model.js";
import {signupSchema, signinSchema} from '../routes/dataValidation/validator.js'
import nodemailer from'nodemailer';
import {v4 as uuidv4} from 'uuid';
import bcrypt from 'bcryptjs'
import Prisma from '@prisma/client';
const prisma = new Prisma.PrismaClient();
import jwt from 'jsonwebtoken';
import {transporter} from '../mailing/mails.js'




// send sign up credentials

const postSignup = (req, res, next) => {
  // data validation
  const {error, value} = signupSchema.validate(req.body, {abortEarly:false});
  if (!error) {
    const user = req.body
    checkAndInsertUser(user, res)
    .then(
      (user) => {
        res.status(200).send(
          {
            "status":"success",
            "message":"signed up successfully",
            "data":user
          }
        )
    }
    )
    .catch(
      (error) => {
        res.status(400).send({
          "message":"an error occured",
          "error":error
        })
      }
    );
  } else {
    let messages = [];
    error.details.map(
      (e) => {
        messages.push(e.message);
      }
    )
    res.status(400).send({
      "message":"user errors, check the data you have inserted",
      "errors":messages
      
    });
  }
};

// post login credentials

const postSignin = (req, res, next) => {
  const {email, password} = req.body;
  const {error, value} = signinSchema.validate(req.body, {abortEarly:false});
  if (!error){
    checkEmailPassword(email, password)
    .then(
      (id) => {
        res.status(200).json(
          {
            "status":"success",
            "message":"sign in success",
            userId:id,
            token:jwt.sign(
              { userId:id},
              process.env.jwtSecret,
              {expiresIn:"24h"}
            )
          }
        )
      }  
     
    )
    .catch(
      (error) => {
        console.log(error)
        res.status(500).json({
          "message":"error",
          "error":error
        });
      }
    );
  }else{
      let messages = [];
      error.details.map(
        (e) => {
          messages.push(e.message);
        }
      );
      res.status(400).send({
        "message ":"user errors, check the data you have inserted",
        "errors ":messages
      });
  }
};


// send verification email

const sendVerificationEmail=(userInDb, res)=>{
  // user info
  const {id,email} = userInDb;

  // url to be used in email
  const currentUrl = "http://localhost:4000/";

  // creating unique string
  const uniqueString = uuidv4() + id;

  // mail options
  const mailOptions = {
    from : process.env.AUTH_EMAIL,
    to : email,
    subject : "verify your email",
    html : `<p>verify your email address to complete the signup and login into your account.</p><p>this link <b>expires in 6 hours</b>.</p><p> Press <a href=${currentUrl + "auth/verify/" + id + "/"+ uniqueString}> here</a> to proceed.</p>`,

  };

  // hash the unique string
  const saltrounds = 10;
  bcrypt.hash(uniqueString, saltrounds)
  .then( 
    async (hashedUniqueString) => {//hashing process successful

      console.log(hashedUniqueString);
      console.log(uniqueString);  
      prisma.Userverifications.create({
        data:{
          userId:id.toString(),
          uniqueString:hashedUniqueString,
          createdAt:new Date(),
          expiresAt:new Date(new Date().getTime()+(24*60*60*1000))
        }
      })
      .then(
      () => {
        // send an email to user's email address for verification
        transporter.sendMail(mailOptions)
        .then(
          async (mailSent) => {
            console.log(mailSent)
            if(mailSent){
              res.status(200).json(
                {
                  "status":"pending",
                  "message":"verification email is sent",
                  "id":id,
                  "uniqueString":uniqueString,
                  "response": {
                    accepted:mailSent.accepted,
                    enveloppe:mailSent.envelope,
                  }                
                }
              )
            }else{
              res.status(500).json(
                {
                  "status":"failed",
                  "message":"system error, sending verification email has failed",
                }
              )
            }
          }
        )
        .catch(
          (error) => {
            console.log(error)
            res.status(400).json({
              "status":"failed",
              "message":"failed to send mail"
            })
          }
        )
      }
    )
    .catch(
      (error) => {
        console.log(error);
        res.status(500).json({
          "status":"failed",
          "message":"error on writing in db"
        })
      }
    )
    }
  )
  .catch(
    (error) => {
      console.log(error)
      res.status(500).json({
        "status":"failed",
        "message":"system error hash failure"
      })
    }
  )

};


const signout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

export { postSignup, signout, postSignin, sendVerificationEmail };
