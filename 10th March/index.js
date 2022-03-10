const express = require('express');

const {showBookInfo} = require(__dirname + '/controllers/bookInfoController');
const {searchBook} = require(__dirname + '/controllers/bookSearchController');
const {sendEmail} = require(__dirname + '/controllers/sendEmailController');
const app = express();
//npm install cookie-parser
const cookieParser = require('cookie-parser');
const session = require('express-session');

//connecting to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://HeroVired:HeroVired@herovireddemo.g70sx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
const connection = mongoose.connection;

const book = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    authorName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:false
    },
    summary:{
        type:String,
        required:false
    },
    readerCount:{
        type:Number,
        required:false
    }
});

const Book = connection.model('Book', book);
Book.create({
    title:'Fluid',
    authorName:'Some author',
    price:250,
    rating:4,
    summary:'Interesting read!'
}, function(err){
    if(err)
        console.log(err);
    else
        console.log('New book inserted!');
});

Book.find({price:{$gt:200} && {$lt:500}}, function(err, result){
    if(err)
        console.log(err);
    else
        console.log(result);
});

Book.updateOne({price:250},{price:300},
    function(err,result){
    if(err)
        console.log(err);
    else
       console.log(result);
});

Book.deleteOne({price:300},
    function(err,result){
    if(err)
        console.log(err);
    else
       console.log(result);
});

Book.find({},function(err, result){
    if(err)
        console.log(err);
    else
       console.log(result);
});


//updateMany

Book.updateMany({price:{$gt:250}},{readerCount:5000}, function(err, result){
    if(err)
        console.log(err);
    else
       console.log(result);
});

//deleteMany
Book.deleteMany({price:{$gt:250}}, function(err, result){
    if(err)
        console.log(err);
    else
       console.log(result);
});








app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret:'jane'}));

app.get('/', function(req, res){
    res.cookie('bookName','1984');
    res.clearCookie('bookName');
    res.sendFile(__dirname + '/pages/index.html');
});

app.get('/details/:id', showBookInfo);

app.get('/', function(req, res){
        res.sendFile(__dirname + '/pages/index.html');
});

app.get('/login', function(req, res){
    if(req.session.visited)
    {
        res.send('Already logged in');
    }
    else
        res.sendFile(__dirname + '/pages/loginForm.html');
});

app.get('/logout', function(req, res){
    req.session.visited = false;
    res.redirect('/login');
});

app.post('/login', function(req, res){
    // console.log(req.body);
    if(req.body.username == 'John' && req.body.userpassword == '123')
    {
        req.session.visited = true;
        res.redirect('/');
    }
    else
        res.send('Failure');
});





app.get('/subscribe', sendEmail);

app.listen(3000, ()=> console.log('Started!'));
