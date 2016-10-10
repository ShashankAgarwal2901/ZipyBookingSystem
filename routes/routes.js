var mongoose = require('mongoose');
var body = require('body-parser');
var jsdom = require("jsdom"); 
var $ = require('jquery')(jsdom.jsdom().defaultView);
mongoose.connect('mongodb://localhost:27017/users' , function(err,data){
	if (err){
		console.log(err);
	}
});
var schema = mongoose.Schema({
	username:String,
	password:String
})
var users=mongoose.model('users' , schema);
console.log("connected to dB");

module.exports = function(app){
	app.post('/button' , function(req,res){
		console.log('Node working for login button');
		users.find({username:req.body.email},function(err,data){
				if (err){console.log(err);}
				else if(data[0])
				{
					res.json({'res':true});
					 /*jquery not working , must find way to append */
				}
		});
	});	
}


