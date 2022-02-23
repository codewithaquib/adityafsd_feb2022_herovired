
var express = require('express');
var app = express();
const myRouter = require('./myRouter');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://AquibMongoDB:AquibMongoDB@cluster0.g70sx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db){
    var myDB = db.db("myFirstDB");
    var obj = {name:"John", age:40};
    myDB.collection("studentInfo").insertOne(obj, function(err, res){
        if(err) throw err;
        console.log("Document inserted!");
        db.close();
    });
});


app.use(express.static('pages'));
app.get('/', myRouter);
app.get('/about', myRouter);

app.listen(3000);