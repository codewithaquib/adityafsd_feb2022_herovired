const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect("mongodb+srv://HeroVired:HeroVired@herovireddemo.g70sx.mongodb.net/mylibrary?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected to mongo!');
});
const connection = mongoose.connection;


// Showing all books
app.get('/', function(req,res){

    // Book Schema
    const book = new mongoose.Schema({
        name : {
            type:String,
            required:true
        },
        author : {
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    });

    const Book = connection.model('Book', book);

    Book.find({}, function(err,result){
        if(err)
            console.log('Error : '+err);
        else
            console.log(result);
    });

    res.sendFile(__dirname + '/pages/index.html');
});

// Subsribe to the library
app.get('/subscribe', function(req,res){
    res.sendFile(__dirname + '/pages/subscribe.html');
});
app.post('/subscribe', function(req,res){
    // User Schema
    const user = new mongoose.Schema({
        user_name : {
            type:String,
            required:true
        },
        user_email : {
            type:String,
            required:true
        }
    });

    const User = connection.model('User', user);

    User.create({user_name:req.body.username, user_email:req.body.useremail}, function(err){
        if(err)
            console.log("Something went wrong : "+err);
        else
        {
            console.log("User added!");
            res.redirect('/');
        }
    });

    });

// Borrowing a book
app.post('/borrow', function(req,res){
});

app.listen(3000,()=>{
    console.log("Running!");
});