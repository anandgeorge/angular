var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var hello = ["Hi", "Hello", "Hallo", "Bonjour"];

app.get('/hello', function(req, res)	{
    var randomHello = Math.floor(Math.random()*hello.length);
	res.json({"hello":hello[randomHello]});
});

app.post('/hello', function(req, res)	{
    var randomHello = Math.floor(Math.random()*hello.length);
	var hellow = req.body.hello + ' ' + hello[randomHello];
	res.json({"hello":hellow});
});

app.listen(3000);

console.log('Listening on port 3000');
