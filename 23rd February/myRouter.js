const express = require('express');
const router = express.Router();
var pathAbout = __dirname + '/pages/about.html';
var pathHome = __dirname + '/pages/index.html';

router.get('/', function(req,res){
    res.sendFile(pathHome);
});

router.get('/about', function(req,res){
    res.sendFile(pathAbout);
});

module.exports = router;