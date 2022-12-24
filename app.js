
const express=require ('express');

const app=express();

const PORT=process.env.PORT||3000;

const path=require('path')

app.use(express.static(path.join(__dirname,'assets')));

app.set('view engine', 'ejs'); 

const bodyParser=require('body-parser');

app.set('views','views');

const homeRouter=require('./routes/home.route')

app.use(bodyParser.urlencoded({extended:true}))



app.use('/', homeRouter);






app.listen(PORT, (err) => { 
    if(err) console.log('server is running!!!',err);
    else console.log(`server is running on http://localhost:${PORT}`);
 })