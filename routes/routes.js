var mongoose = require('mongoose');
var body = require('body-parser');

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

module.exports = function(app){
	app.post('/button' , function(req,res){
		console.log('Node working for login button');
		if(req.body.Password==undefined){
		users.find({username:req.body.Username},function(err,data){
				if (err){console.log(err);}
				else if(data[0]){
					res.send(data[0].username);
				}
				else res.send('no such user');
		})}
		else if(req.body.Password){
		users.find({username:req.body.Username , password:req.body.Password},function(err,data){
				if (err){console.log(err);}
				else if(data[0]){
					res.send(data);
				}
				else res.send('Incorrect')
		})}
		
	});	
}


