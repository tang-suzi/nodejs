var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.end('hello\n')
})

app.listen(18000, function afterListen(){
    console.log('express runn on http://localhost:18000')
})