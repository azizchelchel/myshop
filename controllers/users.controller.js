import {insertUser, delUser} from '../models/users.model.js'
import {transporter} from '../mailing/mails.js'




// crete new user

export const createUser = (req,res,next) => {
    const data = req.body;
    insertUser(data)
    .then(
        password => {
            res.status(200).json(
                {
                    username:data.email,
                    password: password
                }
            )
        }
    )
    .catch(
        async error => {
            console.log(error);
            res.status(500).json(
                {
                    message: "failed",
                    error:error
                }
            )
        }
    )
}

// delete user

export const deleteUser = (req,res,next) => {
    const data = req.body;
    delUser(data)
    .then(
        user => {
            res.status(200).json(
                {
                    message:"user deteleted successfully",
                    data: user
                }
            )
        }
    )
    .catch(
        async error => {
            console.log(error);
            res.status(500).json(
                {
                    message: "failed",
                    error:error
                }
            )
        }
    )
}


// send users credentials in email 

export const sendCredentials=(email, password)=>{
    // url to be used in email
    const currentUrl = "http://localhost:4000/";
    // mail options
    const mailOptions = {
      from : process.env.AUTH_EMAIL,
      to : email,
      subject : "welcome between us",
      html : `<p>here are your credentials, please think to change your password after the firs use.</p><br/><p> USERNAME: ${email} </p><br/><p>PASSWORD: ${password}</p>`
  
    };
    // send an email to user's email address for verification
    transporter.sendMail(mailOptions)
}
      
  
  
 