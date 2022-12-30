
import express, { static as staticMiddleware} from 'express';

import  path , { join } from 'path';

import pkg from 'body-parser';

import homeRouter from './routes/home.route.js';

import productRouter from './routes/product.route.js';

const app=express();

const PORT=process.env.PORT||3000;

const __dirname = path.resolve();

app.use(staticMiddleware(join(__dirname,'assets')));

app.use(staticMiddleware(join(__dirname,'images')));

app.set('view engine', 'ejs'); 

app.set('views','views');

const { urlencoded } = pkg;

app.use(urlencoded({extended:true}))




app.use('/', homeRouter);


app.get('/product/:id', productRouter)






app.listen(PORT, () => { 

    console.log(`server is running on http://localhost:${PORT}`);

 })