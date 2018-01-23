"use strict";
const fs = require('fs');
const express = require('express');
const router = express.Router();
const app = express();


// set up our express application


  app.get('/login',function(req, res){
      res.sendFile( __dirname + '/views/login.html')
  })


app.get('/',function(req, res){
    res.sendFile( __dirname + '/views/home.html')
})

app.get('/puwer',function(req, res){
    res.sendFile( __dirname + '/views/puwer.html')
})








app.use(express.static("static"));




app.listen(3000, function(){
    console.log("Server started and listening on port 3000")
})
