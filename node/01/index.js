
var express = require('express');
var kuong = require('./kuong');

express()
.get('/' , function (req, res){
    res.send(kuong.greeting())
})
.get(/.*/, function(req, res){
    res.stutus(404).send(req.url)
})
.listen(8080 ,function (){
    console.log('Serve at http://localhost:3030')
});
