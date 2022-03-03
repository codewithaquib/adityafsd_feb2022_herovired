const express = require('express');

const {showBookInfo} = require(__dirname + '/controllers/bookInfoController');
const {searchBook} = require(__dirname + '/controllers/bookSearchController');
const {sendEmail} = require(__dirname + '/controllers/sendEmailController');
const app = express();

// const router = express.Router();

// router.use(function(req,res,next){
//     console.log("Router.USE called");
//     next();
// });

// router.get('/', function(req, res){
//     res.sendFile(__dirname + '/pages/index.html');
// });

// app.use('/', router);

// error handling function
// app.use(function(err, req, res, next){
//     console.log(err);
// });

// app.get('/login', function(req,res){
//     throw new Error('Page not found');
// });

// app.get('/signup', function(req,res){
//     throw new Error('Account already exists');
// });

// app.use('/', function(req,res,next){
//     // console.log('Current timestamp : '+ Date());
//     next();
// });

app.get('/', function(req, res){    
    res.sendFile(__dirname + '/pages/index.html');
});

app.get('/details/:id', showBookInfo);

app.get('/', function(req, res){
        res.sendFile(__dirname + '/pages/index.html');
});

app.get('/subscribe', sendEmail);

// app.get('/search', function(req,res){
//     res.sendFile(__dirname + '/pages/search.html');
// });

// app.get('/search/:title', searchBook);

app.listen(3000, ()=> console.log('Started!'));
