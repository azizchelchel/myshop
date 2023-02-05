
import express, { static as staticMiddleware} from 'express';

import  path , { join } from 'path';

import pkg from 'body-parser';

import homeRouter from './routes/home.route.js';

import productRouter from './routes/product.route.js';

import authRouter from  './routes/auth.route.js'

import cartRouter from  './routes/cart.route.js'

import flash from 'connect-flash';

const app=express();

const PORT=process.env.PORT||3000;

const __dirname = path.resolve();

app.use(express.json())

app.use(flash())

app.use(staticMiddleware(join(__dirname,'assets')));

app.use(staticMiddleware(join(__dirname,'images')));

app.set('view engine', 'ejs'); 

app.set('views','views');

const { urlencoded } = pkg;


app.use(urlencoded({extended:true}))


app.use('/product', productRouter);


app.use('/auth', authRouter);


app.use('/', homeRouter);

app.use('/cart', cartRouter);


app.listen(PORT, () => { 

    console.log(`server is running on http://localhost:${PORT}`);

 })