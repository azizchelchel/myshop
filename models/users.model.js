import Prisma from '@prisma/client';
import bcrypt from 'bcryptjs';
import{sendCredentials} from '../controllers/users.controller.js';
const prisma = new Prisma.PrismaClient();





// create a random string for password
const makeid = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}


export const insertUser = (user) => {
    //create random password 
    const password = makeid(15);
    return new Promise(
      (resolve, reject) => {
        prisma.Users.findUnique({
            where:{
              phoneNumber:{
                countryCode:user.countryCode,
                number:user.number
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
              prisma.Users.findUnique({
                where:{
                    email:user.email,
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
                  console.log(password)
                  bcrypt.hash(password, 10, (error,hashedPassword) => {
                    if (error){
                      console.log(error);
                      prisma.$disconnect();
                      reject('system error, hash failure')
                    }else{
                      prisma.Users.create(
                        {
                          data:{
                            personType:user.personType,
                            fname: user.fname,
                            lname:user.lname,
                            countryCode:user.countryCode,
                            number:user.number,
                            email:user.email,
                            address: user.address,
                            password:hashedPassword,
                            isDeleted:false,
                            verified:false
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
  


export const delUser = (data) => {
    return new Promise(
      async (resolve,reject) => {
        await prisma.users.update(
          {
            where:{
              id:data.id
            },
            data:{
              isDeleted:true
            }
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