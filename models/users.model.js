import Prisma from '@prisma/client';
import bcrypt from 'bcrypt';
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
export const insertUser = async (user) => {
  //create random password 
  const password = makeid(15);
  try {
    // controll uniqueness of phone number 
    const foundUser = await prisma.Users.findUnique({
      where: {
        phoneNumber: {
          countryCode: user.countryCode,
          number: user.number
        }
      }
    });
    if (foundUser) {
      await prisma.$disconnect();
      throw new Error('phone number is already in use, try an other.');
    } 
    //controll uniqueness of email
    const foundUserByEmail = await prisma.Users.findUnique({
      where: {
        email: user.email,
      }
    });
    if (foundUserByEmail) {
      await prisma.$disconnect();
      throw new Error('email already in use, try an other.');
    } 
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create record
    const userInDb = await prisma.Users.create({
      data: {
        personType: user.personType,
        fname: user.fname,
        lname: user.lname,
        countryCode: user.countryCode,
        number: user.number,
        email: user.email,
        address: user.address,
        password: hashedPassword,
      }
    });
    await prisma.$disconnect();
    // send credentials in email
    try {
      sendCredentials(userInDb.email, password);
    } catch (error) {
      throw new Error('sending email error.')
    }
    return password;
  } 
  catch (error) {
    // console.log(error.message);
    await prisma.$disconnect();
    throw error;
  }
};

  // update user
export const updateUserInfoInDb = async (data, id) => {
  // control uniqueness of phone number
  try {
    // control uniqueness of phone number
    const userById = await prisma.users.findUnique(
      {
        where: {
          id: parseInt(id)
        }
      }
    );
    if(userById){
      const userByPhoneNumber = await prisma.users.findUnique(
        {
          where: {
            phoneNumber:{
              countryCode: data.countryCode,
              number: parseInt(data.number)
            }
          }
        }
      );
      // check the uniqueness of phone number
      if (userByPhoneNumber && parseInt(userByPhoneNumber.id) !== parseInt(id)) {
        await prisma.$disconnect();
        throw new Error("phone number already in use");
      }
      // phone number is free, check email uniqueness
      const userByEmail = await prisma.Users.findUnique(
        {
          where: {
            email: data.email
          }
        }
      );
      if (userByEmail && parseInt(userByEmail.id) !== parseInt(id)) {
        await prisma.$disconnect();
        throw new Error("email already in use");
      }
      // it's ok we can update data
      // generate a random password
      const newPassword = makeid(15);    
      // hash the random password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      // update data
      const updatedData = await prisma.Users.update(
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
      );
      if(updatedData){
        // send clear password in the response not the hashed one
        updatedData.password = newPassword
        // send email of new credentials
        sendCredentials(updatedData.email, newPassword);
        await prisma.$disconnect();
        console.log(updatedData);
        return updatedData;
      };    
    } 
  } 
  catch (error) {
    console.log(error.message);
    await prisma.$disconnect();
    throw error;
  }
};

// self update password
export const selfUpdatePasswordInDb = async (data, id) => {
  const {password, newPassword} = data;
  try {
    const foundUser = await prisma.users.findUnique(
      {
        where: {
          id: parseInt(id)
        }
      }
    );
    if (foundUser){
      // compare the old password and the new one  
      const isMatch = await  bcrypt.compare(password, foundUser.password);
      if (isMatch){
        // hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        if (hashedPassword){
          const updatedUser = await prisma.users.update(
            {
              where: {
                id: parseInt(id)
              },
              data: {
                password: hashedPassword
              }
            }
          );
          if(updatedUser){
            await prisma.$disconnect();
            // send email of new credentials
            try {
              sendCredentials(updatedUser.email, newPassword);
            } catch (error) {
              throw new Error('error on sending email');
            };
            return newPassword;
          }
          await prisma.$disconnect();
          throw new Error('update password failure');
        }
        await prisma.$disconnect()
        throw new Error('internal system error, hash failure');
      }
      // the password doesn't match the hashed password in db
      await prisma.$disconnect()
      throw new Error('password is incorrect, please try again');
    }
    await prisma.$disconnect();
    throw new Error('record not found');
  }
  catch (error) {
    console.log(error);
    throw error;
  }   
};
  
// delete user
export const delUser = async (userId) => {
  try {
    const updatedData = await prisma.users.update(
      {
        where:{
          id: parseInt(userId)
        },
        data:{
          isDeleted: true
        }
      }
    );
    if(updatedData){
      await prisma.$disconnect();
      return updatedData;
    }
    await prisma.$disconnect();
    throw new Error('record not found');
  } 
  catch (error) {
    await prisma.$disconnect();
    throw error;
  };   
}

// update permissions

export const updatePermissionsInDb = async (permissions, id) => {
  try {
    const updatedData = await prisma.users.update(
      {
        where: {
            id: parseInt(id)
        },
        data: {
            permissions: permissions,
        }
      }  
    );
    if(updatedData){
      await prisma.$disconnect();
      return updatedData;
    }
    await prisma.$disconnect();
    throw new Error('invalid parameters, record not found.');  
  }
  catch (error) {
    // console.log(error);
    await prisma.$disconnect();
    throw error;
  }   
}