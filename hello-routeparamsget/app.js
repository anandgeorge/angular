var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var languages = {"English":"Hello World", "German":"Hallo Welt", "French":"Bonjour tout le monde"};

app.get('/languages/:lang', function(req, res)	{
	res.send(languages[req.params.lang]);
});

app.listen(3000);

console.log('Listening on port 3000');
