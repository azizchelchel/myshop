import Joi from 'joi';

const signupSchema = Joi.object({
    fname: Joi.string().min(2).required(),
    lname: Joi.string().min(2).required(),
    countryCode: Joi.string().min(1),
    number: Joi.number().min(9).required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(5).required(),
    password: Joi.string().min(3).max(10).required(), 
    confirmPassword: Joi.ref("password")

});

const signinSchema = Joi.object({ 
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(10).required(), 
});

export {signupSchema, signinSchema};