import {
    insertUser,
    delUser,
    updateUserInfoInDb,
    updatePermissionsInDb,
    selfUpdatePasswordInDb
} from '../models/users.model.js';
import {transporter} from '../mailing/mails.js';
import {
    createUserSchema,
    updateUserInfoSchema,
    selfUpdatePasswordSchema
 } from '../routes/dataValidation/validator.js';

// crete new user
export const createUser = async (req,res,next) => {
    const data = req.body;
    // check the errors
    const {error, value} = createUserSchema.validate(req.body, {abortEarly:false});
    if(!error){
        try {
            const password = await insertUser(data);
            res.status(200).json(
                {
                    success: true,
                    message: 'user inserted successfully',
                    credentials: {
                        email: data.email,
                        password: password
                    }
                }
            );
        } 
        catch (error) {
            console.log(error.message);
            res.status(500).json(
                {
                    success: false,
                    message: error.message,
                }
            );
        }
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


// update user

export const updateUserInfo = async (req,res,next) => {
    // get the user id from params
    const userId = req.params.id;
    // data to update
    const data = req.body 
    const {error, value} = updateUserInfoSchema.validate(req.body, {abortEarly:false});
    if(!error){
        try {
            const updatedInfo = await updateUserInfoInDb(data,userId);
            res.status(200).json(
                {
                    success: true,
                    message: 'update user info success',
                    updatedInfo: updatedInfo
                }
            );
        } 
        catch (error) {
            console.log('error :', error.message);
            res.status(500).json(
                {
                    success: false,
                    message: error.message,
                }
            );
        }
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

// self update password

export const selfUpdatePassword = async (req,res,next) => {
    // get the user id from params
    const userId = req.params.id;
    // data to update
    const data = req.body;
    const {error, value} = selfUpdatePasswordSchema.validate(req.body, {abortEarly:false});
    if(!error){
        try {
            const newPassword = await selfUpdatePasswordInDb(data,userId);
            res.status(200).json(
                {
                    success: true,
                    message: 'update password success',
                    password: newPassword
                }
            )
        } 
        catch (error) {
            console.log(error);
            res.status(500).json(
                {
                    success: false,
                    message: error.message
                }
            );
        }
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

// soft delete user
export const deleteUser = async (req,res,next) => {
    const userId = req.body.id;
    try {
        const user = await delUser(userId);
        res.status(200).json(
            {
                success: true,
                message: "user deteleted successfully",
                isDeleted: user.isDeleted
            }
        )
    } 
    catch (error) {
        console.log(error);
        res.status(500).json(
            {
                success: false,
                message: error.message,
            }
        )     
    }
};

// update user's permissions

export const updatePermissions = async (req,res,next) => {
    // get the user's id from params
    const userId = req.params.id;
    // data to update
    const permissions = req.body 
    try {
        const result = await updatePermissionsInDb(permissions,userId);
        if(result){
            res.status(200).json(
                {
                    success: true,
                    message: 'update permissions success',
                    user: result
                }
            );
        }
    } 
    catch (error) {
        console.log('error  :', error.message);
        res.status(500).json(
            {
                success: false,
                message: error.message,
            }
        );
    }
};

// send user's credentials in email 
export const sendCredentials = (email, password) => {
    // url to be used in email
    const currentUrl = "http://localhost:4000/";
    // mail options
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "welcome between us",
      html: `<p>here are your credentials, please think to change your password after the first login.</p><br/><p> USERNAME: ${email} </p><br/><p>PASSWORD: ${password}</p>`
    };
    // send an email to user's email address for verification
    transporter.sendMail(mailOptions);
};
      
  
  
 