const express = require('express');

const {showBookInfo} = require(__dirname + '/controllers/bookInfoController');
const {searchBook} = require(__dirname + '/controllers/bookSearchController');
const app = express();
app.get('/details/:id', showBookInfo);
app.get('/', function(req, res){
        res.sendFile(__dirname + '/pages/index.html');
});
app.get('/search', function(req,res){
    res.sendFile(__dirname + '/pages/search.html');
});
app.get('/search/:title', searchBook);
app.listen(3000, ()=> console.log('Started!'));

// 1. List of books on the home route
// 2. Book information should be shown on a separate route
// 3. Search for a book in the collection
    //a. Search route "/search" -> contain a form input with a search button
    //b. Search route with parameter book title
