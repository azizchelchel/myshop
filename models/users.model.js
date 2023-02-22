import Prisma from '@prisma/client';
import bcrypt from 'bcryptjs';
import{sendCredentials} from '../controllers/users.controller.js';
const prisma = new Prisma.PrismaClient();

// create a random string for user password
const makeid = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  };
  return result;
}

// create new user

export const insertUser = (user) => {
    //create random password 
    const password = makeid(15);
    return new Promise(
      (resolve, reject) => {
        // controll uniqueness of phone number 
        prisma.Users.findUnique({
            where:{
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
            } else {  
              //controll uniqueness of email
              prisma.Users.findUnique({
                where:{
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
                else{
                  console.log(password);
                  // hash the password
                  bcrypt.hash(password, 10, (error,hashedPassword) => {
                    if (error){
                      console.log(error);
                      prisma.$disconnect();
                      reject('system error, hash failure')
                    }else{
                      // create record
                      prisma.Users.create(
                        {
                          data:{
                            personType: user.personType,
                            fname: user.fname,
                            lname: user.lname,
                            countryCode: user.countryCode,
                            number: user.number,
                            email: user.email,
                            address: user.address,
                            password: hashedPassword,
                          }
                        }
                      )
                      .then(
                        async (userInDb) => {
                          // send credentials in email
                          sendCredentials(userInDb.email,password);
                          await prisma.$disconnect();
                          resolve(password);
                        }
                      )
                      .catch(
                        async (error) => {
                        console.log("can't save in db " + error);
                        await prisma.$disconnect();
                        reject("system error, db interrogation failed");
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
                reject('system error, db interrogation failed')
              }
            )
            }
          }
        )
        .catch(
          async (error) => {
            console.log(error);
            prisma.$disconnect();
            reject("system error, db interrogation failed")
          }
        )
      }
    );
  };

  // update user

  
export const updateUserInfoInDb = (data, id) => {
  return new Promise (
    async (resolve, reject) => {
      // control uniqueness of phone number
      await prisma.users.findUnique(
        {
          where: {
            id: parseInt(id)
          }
        }
      )
      .then(
        async (founUser) => {
          await prisma.users.findUnique(
            {
              where: {
                phoneNumber:{
                  countryCode: data.countryCode,
                  number: parseInt(data.number)
                }
              }
            }
          )
          .then(
            async (foundUser) => {
              // check if phone number is in use
              if (foundUser && parseInt(foundUser.id) !== parseInt(id)) {
                await prisma.$disconnect();
                reject("phone number already in use");
              }else{
                // phone number is free, check email uniqueness
                await prisma.Users.findUnique(
                  {
                    where: {
                      email: data.email
                    }
                  }
                )
                .then(
                  async (foundUser) => {
                    // check if email is in use
                    if (foundUser && parseInt(foundUser.id) !== parseInt(id)) {
                      await prisma.$disconnect();
                      reject("email already in use");
                    }
                    // it's ok we can update data
                    const newPassword = makeid(15);   // generate a random password 
                    // hash the random password
                    bcrypt.hash(newPassword, 10,
                      async (error, hashedPassword) => {
                        if(error){
                          console.log(error);
                          prisma.$disconnect();
                          reject('system error, hash failure')
                        }
                        else
                        {
                          // update data
                          await prisma.Users.update(
                            {
                              where: {
                                id: parseInt(id)
                              },
                              data: {
                                "fname": data.fname,
                                "lname": data.lname,
                                "countryCode": data.countryCode,
                                "number": data.number,
                                "email":data.email,
                                "password":hashedPassword,
                                "address": data.address
                              }
                            }
                          )
                          .then(
                            async (updatedUser) => {
                              // send clear password in the response not the hashed one
                              updatedUser.password = newPassword
                              // send email of new credentials
                              sendCredentials(updatedUser.email, newPassword);
                              await prisma.$disconnect();
                              resolve(updatedUser);
                            }
                          )
                          .catch(
                            async (error) => {
                              console.log(error);
                              await prisma.$disconnect();
                              reject("internal system error, db error");
                            }
                          )
                        }                     
                      }
                    );
                  }
                )
                .catch(
                  async (error) => {
                    console.log(error);
                    await prisma.$disconnect();
                    reject("internal system error, db error");
                  }
                )
              }
            }
          ) 
          .catch(
            async (error) => {
              console.log(error);
              await prisma.$disconnect();
              reject("system error occured, db error");
            }
          )
        }
      )
      .catch(
        async (error) => {
          console.log(error);
          await prisma.$disconnect();
          reject('internal system error, db error')
        }
      )
    }
  )
};

// self update password
 
export const selfUpdatePasswordInDb = (data, id) => {
  return new Promise (
    async (resolve, reject) => {
      const {password, newPassword} = data;
      // control uniqueness of phone number
      await prisma.users.findUnique(
        {
          where: {
            id: parseInt(id)
          }
        }
      )
      .then(
        async (foundUser) => {
          if(foundUser){
            // compare the old password and the new one  
            bcrypt.compare(password, foundUser.password, async (error, isMatch) => {
              if (error) {
                await prisma.$disconnect();
                reject('internal system error occured');
              }
              if(!isMatch){
                // the password matches the hashed password in db
                await prisma.$disconnect()
                reject('password is incorrect, please try again');
              }
              // hash the new password
              bcrypt.hash(newPassword, 10, async (error, hashedPassword) => {
                if(error){
                  await prisma.$disconnect();
                  reject('internal system error occured, hash failure');
                };
                // update the password
                await prisma.users.update(
                  {
                    where: {
                      id: parseInt(id)
                    },
                    data: {
                      password: hashedPassword
                    }
                  }
                )
                .then(
                  async (updatedData) => {
                    if(updatedData){
                      await prisma.$disconnect();
                      resolve(newPassword);
                       // send email of new credentials
                       sendCredentials(updatedData.email, newPassword);
                    }
                  }
                )
                .catch(
                  async (error) => {
                    console.log(error);
                    await prisma.$disconnect();
                    reject('internal system error, db error')
                  }
                )
              })
            })
          }else{
            await prisma.$disconnect();
          reject(`user with user id (${id}) is not found`);
          }
        }
      )
      .catch(
        async (error) => {
          console.log(error);
          await prisma.$disconnect();
          reject('internal system error, db error')
        }
      )
    }
  )
};


  
// delete user

export const delUser = (userId) => {
    return new Promise(
      async (resolve,reject) => {
        await prisma.users.update(
          {
            where:{
              id: userId
            },
            data:{
              isDeleted: true
            }
          }
        ).then(
          async (updatedData) => {
            await prisma.$disconnect();
            resolve(updatedData);
          }
        )
        .catch(
          async error => {
            console.log(error);
            await prisma.$disconnect();
            reject(error);
          }
        )
      }
    )
}

// update permissions

export const updatePermissionsInDb = (permissions, id) => {
  return new Promise (
      async (resolve, reject) => {
          await prisma.users.update(
              {
                  where: {
                      id: parseInt(id)
                  },
                  data: {
                      permissions: permissions,
                  }
              }
          )
          .then(
              async (updatedUser) => {
                  await prisma.$disconnect();
                  resolve(updatedUser);
              }
          )
          .catch(
              async (error) => {
                  console.log(error);
                  await prisma.$disconnect();
                  reject('system error update failed');
              }
          )
      }
  )
}