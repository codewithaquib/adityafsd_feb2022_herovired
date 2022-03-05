const express = require('express');

const {showBookInfo} = require(__dirname + '/controllers/bookInfoController');
const {searchBook} = require(__dirname + '/controllers/bookSearchController');
const {sendEmail} = require(__dirname + '/controllers/sendEmailController');
const app = express();
//npm install cookie-parser
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret:'jane'}));

app.get('/', function(req, res){
    res.cookie('bookName','1984');
    res.clearCookie('bookName');
    res.sendFile(__dirname + '/pages/index.html');
});
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

// app.get('/search', function(req,res){
//     res.sendFile(__dirname + '/pages/search.html');
// });

// app.get('/search/:title', searchBook);

app.listen(3000, ()=> console.log('Started!'));
