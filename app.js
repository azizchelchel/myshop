
import express, { static as staticMiddleware} from 'express';

import  path , { join } from 'path';

import pkg from 'body-parser';

import homeRouter from './routes/home.route.js';

import productRouter from './routes/product.route.js';

import authRouter from  './routes/auth.route.js'

import bcrypt from 'bcrypt';

import session from 'express-session';

import SessionStore from 'connect-mongodb-session';

import flash from 'connect-flash'

const myMongoDbStore=SessionStore(session);

const app=express();

const PORT=process.env.PORT||3000;

const __dirname = path.resolve();

app.use(flash())

app.use(staticMiddleware(join(__dirname,'assets')));

app.use(staticMiddleware(join(__dirname,'images')));

app.set('view engine', 'ejs'); 

app.set('views','views');

const { urlencoded } = pkg;

const STORE=new myMongoDbStore({
    uri: process.env.db_url,
    collection:'sessions'
})

app.use(session({
    secret:process.env.myDbSecret,
    saveUninitialized:false,
    resave:false,
    cookie:{                              // if we want to let it 
        maxage:60*1000  //one hour     // default ie at the closing of brouser
    },                                    // we dont mention cookie field
    store:STORE  //if not mentionned default is in the memory if the server(RAM)

}))

app.use(urlencoded({extended:true}))


app.use('/product', productRouter);


app.use('/auth', authRouter);




app.use('/', homeRouter);


app.listen(PORT, () => { 

    console.log(`server is running on http://localhost:${PORT}`);

 })