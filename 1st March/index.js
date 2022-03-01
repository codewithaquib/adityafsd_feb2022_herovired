const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/pages/index.html');
});

app.get('/details', function(req, res){
    res.sendFile(__dirname + '/pages/bookDetails.html');
});

app.listen(3000, ()=> console.log('Started!'));

// 1. List of books on the home route
// 2. Book information should be shown on a separate route
// 3. Search for a book in the collection
