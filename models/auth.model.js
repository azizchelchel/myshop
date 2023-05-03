import Prisma from '@prisma/client';
import {sendVerificationEmail} from '../controllers/auth.controller.js';
import bcrypt from 'bcryptjs';
import {allPermissions} from './permissions.model.js'

const prisma = new Prisma.PrismaClient();

// check for user in db and insert it or reject error
export const checkAndInsertUser = async (user,res) => {
  try {
    // control of uniqueness of phone number
    const userByPhoneNumber = await prisma.Users.findUnique(
      {
        where: {
          phoneNumber:{
            countryCode: user.countryCode,
            number: user.number
          }
        }
      }
    );
    if(userByPhoneNumber){
      await prisma.$disconnect();
      throw new Error("this phone number is in use, try another.");
    }
    else
    {
      //control uniqueness of email
      const userByEmail = await prisma.Users.findUnique(
        {
          where: {
              email: user.email,
          }
        }
      );
      if(userByEmail){
        await prisma.$disconnect();
        throw new Error("this email is in use, try another.");
      }
      else
      {
        // hash the password
        const hashedPassword = await bcrypt.hash(user.password, 10);
        console.log(hashedPassword);
        if(hashedPassword){
          const newUser = await prisma.Users.create(
            {
              data: {
                fname: user.fname,
                lname: user.lname,
                countryCode: user.countryCode,
                number: user.number,
                email: user.email,
                address: user.address,
                password: hashedPassword,
                permissions: allPermissions
              }
            }
          );
          if(newUser){
            // send a verification email
            try {
              const result= await sendVerificationEmail(newUser,res);
              if (result) return result
            } 
            catch (error) {
              await prisma.$disconnect();
              throw new Error('sending verification email failed');
            }
          }
        }
      }
    }
  } 
  catch (error) {
    await prisma.$disconnect();
    throw error;
  }
};

// create user veritfication
export const createUserVerif = async (hashedUniqueString, id) => {
  return await prisma.Userverifications.create(
    {
      data: {
        userId: parseInt(id),
        uniqueString: hashedUniqueString,
        createdAt: new Date(),
        expiresAt: new Date(new Date().getTime()+(24*60*60*1000))
      }
    }
  )
  .then(
    async (newVerif) => {
      await prisma.$disconnect();
      return newVerif;
    }
  )
  .catch(
    async (error) => {
      console.log(error);
      await prisma.$disconnect();
      throw error;
    }
  )
}

// check if email exists 
export const checkEmailPassword = async (email, password) => {
  try {
    const userByEmail = await prisma.Users.findUnique({ where: {email: email} });
    if(userByEmail){
      //  email exists in DB, lets compare passwords
      let hashedPassword = userByEmail.password;
      const same = await bcrypt.compare(password, hashedPassword);
      if(same){
        await prisma.$disconnect();
        return userByEmail;
      }
      else
      {
        await prisma.$disconnect();
        throw new Error ("email or password incorrect, retry");
      }
    }
    else{
      await prisma.$disconnect();
      throw new Error ("email or password incorrect.");
    }
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    throw error;
  }
};

// verifying userId and unique string recieved in request

export const emailVerification = async (req, res, next) => {
    let {userId, uniqueString} = req.params; 
    await prisma.userverifications.findUnique(
      {
        where: {userId: parseInt(userId)}
      }
    )
    .then(
      async (result) => {
        if (result){
          const expiresAt = result.expiresAt;
          const hashedUniqueString = result.uniqueString;
          if(expiresAt < Date.now()){    //message has expired
            //delete the user verification record from DB
            console.log('received email has expired, please resign up.');
            // delete userVerification record
            await prisma.userverifications.delete(
              {
                where:{
                  userId: result.userId
                }
              }
            )
            .then(
              async () => {
                // delete user record from users table
                await prisma.Users.update(
                  {
                    where: {
                      id: parseInt(userId)
                    },
                    data: {
                      isDeleted: true
                    }
                  }
                )
                .then(
                  (deleted) => {
                    res.status(100).json(
                      {
                        "status": false,
                        "message":"Link has expired. please sign up again",
                        "data":deleted
                      }
                    );
                  }
                )
                .catch(
                  (error) => {
                    console.log(error);
                    res.status(500).json(
                      {
                        "status": false,
                        "message": "system error, clearing user whith expired unique string failed",
                        "error": error
                      }
                    );
                  }
                )
              }
            )
            .catch(
              (error) => {
                console.log(error);
                res.status(500).json(
                  {
                    "status": false,
                    "message": 'system error, clearing expiring user verification failed',
                    "error": error
                  }
                );
              }
            ) 
          }
          else
          {
            // valid record exists so we validate the user string
            // first compare the hashed unique string to the one sent by the user
            await bcrypt.compare(uniqueString, hashedUniqueString)
            .then(
              async (result) => {             // the strings match.
                console.log("result " + result)
                if(result){
                  // update user status "verified" to true
                  await prisma.Users.update(
                    {
                      where: {
                        id: parseInt(userId)
                      },
                      data: {
                        verified: true
                      }
                    }
                  )
                  .then(
                    (updated) => {
                      res.status(200).json(
                        {
                          "status": true,
                          "message": "congratulation you have successfully signned up, now you can log in ",
                          "data": updated
                        }
                      );
                    }
                  )
                  .catch(
                    (error) => {
                      console.log(error);
                      res.status(500).json({
                        "status": false,
                        "message": 'system error, updating verified user status failed',
                        "error":error
                      });
                    }
                  ) 
                }
                else
                {
                  res.status(500).json(
                    {
                      "status": false,
                      "message": "Invalid verification detailes passed. check your inbox."
                    }
                  );
                }
              }
            )
            .catch(
              (error) => {
                console.log(error)
                res.status(500).json(
                  {
                    "status": false,
                    "message": "system error occured when comparing strings.",
                    "error": error
                  }
                );
              }
            )
          }
  
        }
        else
        {
          res.status(400).json(
            {
              "status": false,
              "message": "account record doesn't exist or has been already verified. please sign up or sign in."
            }
          );
        }
      }
    )
    .catch(
      (error) => {
        console.log(error);
        res.status(500).json(
          {
            "status": false,
            "message": "a system error occurred while checking for existing user cerification record",
            "error": error
          }
        );
      }
    )
};


