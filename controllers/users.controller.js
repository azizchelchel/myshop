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
    if(error){
        await insertUser(data)
        .then(
            password => {
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
        )
        .catch(
            async error => {
                console.log(error);
                res.status(500).json(
                    {
                        success: false,
                        message: 'system error',
                        error: error
                    }
                );
            }
        )
    }
    else
    {
        let messages = [];
        error.details.map(
            (e) => {
                messages.push(e.message);
            }
        );
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
        await updateUserInfoInDb(data,userId)
        .then(
            updatedUser => {
                res.status(200).json(
                    {
                        success: true,
                        message: 'update user info success',
                        updatedInfo: updatedUser
                    }
                );
            }
        )
        .catch(
            (error) => {
                console.log('error :', error);
                res.status(500).json(
                    {
                        success: false,
                        message: 'system error',
                        error: error
                    }
                );
            }
        )

    }
    else
    {
      let messages = [];
      error.details.map(
        (e) => {
          messages.push(e.message);
        }
      );
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
        await selfUpdatePasswordInDb(data,userId)
        .then(
            updatedPassword => {
                res.status(200).json(
                    {
                        success: true,
                        message: 'update password success',
                        password: updatedPassword
                    }
                );
            }
        )
        .catch(
            (error) => {
                console.log('error', error);
                res.status(500).json(
                    {
                        success: false,
                        message: 'system error',
                        error: error
                    }
                );
            }
        )
    }
    else
    {
        let messages = [];
        error.details.map(
            (e) => {
                messages.push(e.message);
            }
        );
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
    const userId = req.params;
    await delUser(userId)
    .then(
        user => {
            res.status(200).json(
                {
                    success: true,
                    message: "user deteleted successfully",
                    user: user
                }
            );
        }
    )
    .catch(
        error => {
            console.log(error);
            res.status(500).json(
                {
                    success: false,
                    message: "system error",
                    error: error
                }
            );
        }
    )
};

// update user's permissions

export const updatePermissions = async (req,res,next) => {
    // get the user's id from params
    const userId = req.params.id;
    // data to update
    const permissions = req.body 
    const {error, value} = updatePermissionsSchema.validate(req.body, {abortEarly:false});
    if(!error){
        await updatePermissionsInDb(permissions,userId)
        .then(
            user => {
                res.status(200).json(
                    {
                        success: true,
                        message: 'update permissions success',
                        user: user
                    }
                );
            }
        )
        .catch(
            (error) => {
                console.log('error', error);
                res.status(500).json(
                    {
                        success: false,
                        message: 'system error',
                        error: error
                    }
                );
            }
        )
    }
    else{
        let messages = [];
        error.details.map(
            (e) => {
                messages.push(e.message);
            }
        );
        res.status(400).send(
            {
                success: false,
                message: "user errors, check the data you have inserted",
                errors: messages
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
      
  
  
 