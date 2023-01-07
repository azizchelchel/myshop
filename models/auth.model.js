import mongoose, { set, Schema, model, connect, disconnect } from 'mongoose';

import 'dotenv/config' ;

import bcrypt, {hash} from 'bcrypt';

set('strictQuery', true);  


// define the user schema

const userSchema=Schema({

    username:String,
    email:String,
    password:String,
    

});

// create user model

const userModel= mongoose.model('user', userSchema);

// check for user in db and insert it or reject

const checkAndInsertUser= (user)=>{

    return new Promise((resolve, reject) => {

        //  try to connect  to db

        connect(process.env.db_url.toString())

        .then(

                () => {
                    console.log('connected to db ');

                    return userModel.findOne({ email: user.email })
                    
                }
        )
        .then(

            (foundUser) => {

                if (foundUser) {
                    console.log('found')
                   
                    disconnect(); 
                    reject('found');

                } else {

                    // let hash the password before inserting it in db;

                    bcrypt.hash(user.password,10)
                    .then(
                        (hashedpassword) => { 
                        const newUser=new userModel({
                            username:user.username,
                            email:user.email,
                            password:hashedpassword
                        });

                        newUser.save()
                        .then(
                           () => {
                            disconnect();
                            resolve(user);
                           }
                        )
                        .catch((err) => {
                            console.log("can't save in db "+err);
                            disconnect();
                            reject(err)
                        })

                        }
                    )
                    .catch((err) => {
                        console.error('encription has failed'+ err)
                        disconnect();
                        reject(err);
                    })
                    }
            }
        )
        .catch ((err)=>{

                disconnect();
                reject(err);
            
            }) ;
    }
    )
}  

const checkEmailPassword=(email, password)=>{

   
    // connect to db 
    // check if email exists
            //yes---->hash password & compare to password in db
            //no----> error  not signed in yet

    return new Promise((resolve,reject) => { 
        
        connect(process.env.db_url.toString())
        .then(
                () => {
                    console.log('here');

                    userModel.findOne({email:email}).then(
                        (foundUser) => {

                            console.log('the found user is'+foundUser);

                            if(!foundUser){

                                disconnect()
                                reject('email or password incorrect')

                            }else{

                                //  compare passwords

                                console.log('found');

                               
                                let foundPassword=foundUser.password;

                                console.log(password,foundPassword)

                                bcrypt.compare(password,foundPassword ).then(
                                    (same) => {
                                        if (same){
                                            console.log(same)
                                            disconnect();
                                            resolve(foundUser._id)
                                        }else{
                                            disconnect();
                                            reject('email or password incorrect')
                                        }
                                    }
                                )
                            }
                        }    
                    )
                    
                    .catch(
                        (err) => {
                            
                            // console.error('internal system error '+err);
                            reject('dbUnRequestable');
                        }
                    )
                }
        )
        .catch(
            (error) => {

            console.log('cant connect to db '+error);
            reject(error);
           
        }) }

    )
}





export {checkAndInsertUser, checkEmailPassword};