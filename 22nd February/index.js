var express = require('express');
var app = express();
const myRouter = require('./myRouter');

app.use(express.static('pages'));
app.get('/', myRouter);
app.get('/about', myRouter);

app.listen(3000);

// var http = require('http');

// var url = require('url');

// http.createServer(function(req,res){
//     if(req.url=="/")
//     {   
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.end("Home Screen");
//     }
//     else if(req.url="/about")
//     {
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.end("About Screen");
//     }
//     else
//     {
//         res.writeHead(404, {'Content-Type':'text/html'});
//         res.end("Not found");
//     }
    
// }).listen(3000);