const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path= require('path');
const cors= require('cors');

const config = require('config');
const products = require('./routes/products');
const brands = require('./routes/brands');


mongoose.connect(config.get('db') , { useNewUrlParser: true ,useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb'))
    .catch(err =>  console.error('Could not connect to mongodb'));

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.set("view engine", "ejs");

app.use(cors());
app.use(express.static(path.join(__dirname, '../Client/public')));

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin' , products);
app.use('/brand' , brands);


app.get('/brand', async function(req,res){
    res.render('brand');
});

app.get('/logging', async function(req,res){
    res.render('product');
});

const port=process.env.PORT || 8000 ;
console.log(port);
const server = app.listen(port, ()=> console.log(`Listening on port ${port}...`));
var env = process.env.NODE_ENV || 'development';
console.log(env);
