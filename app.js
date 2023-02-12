
import express, { static as staticMiddleware} from 'express';
import  path, { join } from 'path';
import pkg from 'body-parser';
import productRouter from './routes/product.route.js';
import authRouter from  './routes/auth.route.js';
import usersRouter from  './routes/users.route.js';
import drugRouter from './routes/drug.route.js'
import bodyParser from 'body-parser';
import  crypto from 'crypto';
const app = express();
const PORT = process.env.PORT||3000;
const __dirname = path.resolve();
const { urlencoded } = pkg;

app.set('view engine', 'ejs'); 
app.set('views', 'views');
app.use(express.json())
app.use(staticMiddleware(join(__dirname, 'assets')));
app.use(staticMiddleware(join(__dirname, 'images')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/drug', drugRouter);
app.use('/product', productRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => { 
    console.log(`server is running on http://localhost:${PORT}`);
 })