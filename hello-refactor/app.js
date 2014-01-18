var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/hello');

var Schema = mongoose.Schema
        , ObjectId = Schema.ObjectId;

var LanguageSchema = new Schema({
	name: String
,	say: String
});

var Language = mongoose.model('Language', LanguageSchema);

app.get('/languages/:lang', function(req, res)	{
	Language.findOne({name:req.params.lang}, function(err, result)	{
		if(!err)	{
			res.json(result);
		}
	});
});

app.listen(3000);

console.log('Listening on port 3000');

