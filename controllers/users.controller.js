import {
    insertUser,
    delUser,
    updateUserInDb,
    updatePermissionsInDb
} from '../models/users.model.js';
import {transporter} from '../mailing/mails.js';

// crete new user
export const createUser = async (req,res,next) => {
    const data = req.body;
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
};

// update user

export const updateUser = async (req,res,next) => {
    // get the product id from params
    const userId = req.params.id;
    // data to update
    const data = req.body 
    await updateUserInDb(data,userId)
    .then(
        product => {
            res.status(200).json(
                {
                    success: true,
                    message: 'update product success',
                    product: product
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

};

// soft delete user

export const deleteUser = async (req,res,next) => {
    const data = req.body;
    await delUser(data)
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
      
  
  
 