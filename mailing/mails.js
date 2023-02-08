import nodemailer from'nodemailer';
export const  transporter = nodemailer.createTransport(
  {
    service:"Gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS
    }
  }
);
  
// verify sending emails

transporter.verify(
  (error, success) => {
    if(error){
      console.log('error'+error);
    }
    else
    {
      console.log('ready for messaging');
    }
  }
);