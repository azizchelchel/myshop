import {
  checkAndInsertUser,
  checkEmailPassword,
  createUserVerif
} from "../models/auth.model.js";
import {
  signupSchema,
  signinSchema
} from '../routes/dataValidation/validator.js';
import {v4 as uuidv4} from 'uuid';
import bcrypt from 'bcryptjs';
import Prisma from '@prisma/client';
import jwt from 'jsonwebtoken';
import {transporter} from '../mailing/mails.js'

const prisma = new Prisma.PrismaClient();

// sign up process
export const postSignup = async (req, res, next) => {
  // data validation
  const {error, value} = signupSchema.validate(req.body, {abortEarly:false});
  if (!error) {
    const user = req.body
    await checkAndInsertUser(user, res)
    .then(
      (userEmail) => {
        res.status(200).send(
          {
            success: true,
            message: "your sign up is pending, check the email sent to you to confirm registration.",
            user: userEmail
          }
        );
      }
    )
    .catch(
      (error) => {
        console.log(error)
        res.status(400).send(
          {
            success: false,
            message: "an error occured",
            error: error.message
          }
        );
      }
    );
  }
  else
  {
    let messages = [];
    error.details.map(e =>messages.push(e.message));
    res.status(400).send(
      {
        success: false,
        message: "user errors, check the data you have inserted",
        errors: messages
      }
    );
  };
};

// send verification email
export const sendVerificationEmail = async (userInDb, res) => { 
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
  try {
      const hashedUniqueString = await bcrypt.hash(uniqueString, saltrounds);
      const userVerif = await createUserVerif(hashedUniqueString, id);
      if(userVerif){
        // send an email to user's email address for verification
        const mailSent = await transporter.sendMail(mailOptions);
        if (mailSent){
          return mailSent.accepted;
        }
      }
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(
      {
        success: false,
        message: "system error, hash failure",
        error: error
      }
    );
  }
};

// login process

export const postSignin = async (req, res, next) => {
  const {email, password} = req.body;
  const {error, value} = signinSchema.validate(req.body, {abortEarly:false});
  if(!error){
    await checkEmailPassword(email, password)
    .then(
      (user) => {
        res.status(200).json(
          {
            success: true,
            message: "sign in success",
            userId: user.id,
            token: jwt.sign(
              {
                "userInfo": {
                  "userId": user.id,
                  "permissions": user.permissions
                }
              },
              process.env.jwtSecret,
              { expiresIn: "24h" }
            )
          }
        );
      }  
    )
    .catch(
      (error) => {
        console.log(error);
        res.status(500).json(
          {
            success: false,
            message: 'problem occured',
            error: error
          }
        );
      }
    );
  }
  else
  {
    let messages = [];
    error.details.map(e => messages.push(e.message));
    res.status(400).send(
      {
        success: false,
        message: "user errors, check the data you have inserted",
        errors: messages
      }
    );
  }
};



// sign out 
export const signout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};


