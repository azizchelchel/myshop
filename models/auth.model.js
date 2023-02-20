import Prisma from '@prisma/client';
import {sendVerificationEmail} from '../controllers/auth.controller.js';
import bcrypt from 'bcryptjs';
import {allPermissions} from './permissions.model.js'

const prisma = new Prisma.PrismaClient();

// check for user in db and insert it or reject error
export const checkAndInsertUser = (user,res) => {
  return new Promise(
    (resolve, reject) => {
      // controll uniqueness of phone number
      prisma.Users.findUnique(
        {
          where: {
            phoneNumber:{
              countryCode: user.countryCode,
              number: user.number
            }
          }
        }
      )  
      .then(
        async (foundUser) => {
          if (foundUser) {
            await prisma.$disconnect();
            reject("this phone number is in use, try another.");
          }
          else
          {
            // control uniqueness of email
            prisma.Users.findUnique(
              {
                where: {
                    email: user.email,
                }
              }
            )
            .then(
              async (foundUser) => {
                if (foundUser) {
                  await prisma.$disconnect();
                  reject("this email is in use, try another.");
                }
                else
                {
                  console.log(user.password);
                  // hash the password
                  bcrypt.hash(user.password, 10, (error,hashedPassword) => {
                    if (error){
                      console.log(error);
                      prisma.$disconnect();
                      reject('system error, hash failure')
                    }
                    else
                    {
                      prisma.Users.create(
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
                      )
                      .then(
                        (userInDb) => {
                          // send a verification email
                          sendVerificationEmail(userInDb,res);
                        }
                      )
                      .catch(
                        async (error) => {
                          console.log("can't save in db " + error);
                          await prisma.$disconnect();
                          reject("can't save record in DB.");
                        }
                      );
                    } 
                  }
                  )    
                }
              }
            )
            .catch(
              async (error) => {
                console.error(error);
                await prisma.$disconnect();
                res.status(500).json(
                  {
                    "status": "failed",
                    "message": "system error, db error"
                  }
                )
              }
            )
          }
        }
      )
      .catch(
        async (error) => {
          console.log(error);
          prisma.$disconnect();
          reject("system error, findUnique failed")
        }
      )
    }
  );
};

// check if email exists 
export const checkEmailPassword = (email, password) => {
  // check if email exists -->| yes---->hash password & compare to password stored in db
  //                          | no----> error  not signed in yet  
  return new Promise(
    async (resolve, reject) => {
      await prisma.Users.findUnique({ where: {email: email} })
      .then(
        async (foundUser) => {
          if (foundUser) {
            //  email exists in DB, lets compare passwords
            let hashedPassword = foundUser.password;
            await bcrypt.compare(password, hashedPassword)
            .then(
              async (same) => {
                if (same) {
                  console.log('the password is correct');
                  await prisma.$disconnect();
                  resolve(foundUser);
                }
                else
                {
                  console.log('password incorrect');
                  await prisma.$disconnect();
                  reject("email or password incorrect, retry");
                }
              }
            )
            .catch(
              async (error) => {
                console.log(error);
                await prisma.$disconnect();
                reject("system error, bcrypt comparison operation has failed");
              }
            );
          }
          else
          {
            // email not found in DB
            console.log("email incorrect");
            await prisma.$disconnect();
            reject("email or password incorrect, retry");
          }
        }
      )
      .catch(
        async (error) => {
          console.error("internal system error " + error);
          await prisma.$disconnect();
          reject("db unrequestable");
        }
      );
    }
  );
};

// verifying userId and unique string recieved in request

export const emailVerification = async (req, res, next) => {
    let {userId, uniqueString} = req.params; 
    await prisma.userverifications.findUnique(
      {
        where: {userId: userId.toString()}
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
                      userId: parseInt(userId)
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


