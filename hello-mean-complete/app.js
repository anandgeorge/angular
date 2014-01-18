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

app.get('/languages', function(req, res)	{
	Language.find({}, function(err, result)	{
		if(!err)	{
			res.json(result);
		}
	});
});

app.get('/language/:lang/:say', function(req, res)	{
	Language.findOne({name:req.params.lang}, function(err, result)	{
		if(result == null)	{
			var language = new Language({"name":req.params.lang, "say":req.params.say});
			language.save(function(err, result)	{
				if(!err)	{
					Language.find({}, function(err, result)	{
						if(!err)	{
							res.json(result);
						}
					});
				}
			});
		}
		else	{
			result.say = req.params.say;
			result.save(function(err, result)	{
				if(!err)	{
					Language.find({}, function(err, result)	{
						if(!err)	{
							res.json(result);
						}
					});
				}
			});
		}
	});
});

app.delete('/language/:lang', function(req, res)	{
	Language.remove({name:req.params.lang}, function(err, result)	{
		if(!err)	{
			Language.find({}, function(err, result)	{
				if(!err)	{
					res.json(result);
				}
			});
		}
	});
});

app.listen(3000);

console.log('Listening on port 3000');

