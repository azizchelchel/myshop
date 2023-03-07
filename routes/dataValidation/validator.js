import Joi from 'joi';

// signup Schema
export const signupSchema = Joi.object(
    {
        fname: Joi.string().min(2).required(),
        lname: Joi.string().min(2).required(),
        countryCode: Joi.string().min(1),
        number: Joi.number().min(9).required(),
        email: Joi.string().email().required(),
        address: Joi.string().min(5).required(),
        password: Joi.string().min(3).max(15).required(), 
        confirmPassword: Joi.ref("password"),
        permissions: Joi.object({
            getAll: Joi.string().equal('PC123'),
            getOne: Joi.string().equal('PC456'),
            create: Joi.string().equal('PC789'),
            delete: Joi.string().equal('PC321'),
            update: Joi.string().equal('PC654'),
        })
    }
);

// signin Schema
export const signinSchema = Joi.object(
    { 
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(15).required(), 
    }
);

// update user schema
export const updateUserInfoSchema = Joi.object(
    {
        fname: Joi.string().min(2).required(),
        lname: Joi.string().min(2).required(),
        countryCode: Joi.string().min(1),
        number: Joi.number().min(9).required(),
        email: Joi.string().email().required(),
        address: Joi.string().min(5).required(),  
    }
);

// self update password schema

export const selfUpdatePasswordSchema = Joi.object(
    {
        password: Joi.string().min(3).max(15).required(), 
        newPassword: Joi.string().min(3).max(15).required()
    }
);

// create user schema

export const createUserSchema = Joi.object(
    {
        fname: Joi.string().min(2).required(),
        lname: Joi.string().min(2).required(),
        countryCode: Joi.string().min(1),
        number: Joi.number().min(9).required(),
        email: Joi.string().email().required(),
        address: Joi.string().min(5).required()
    }
);



