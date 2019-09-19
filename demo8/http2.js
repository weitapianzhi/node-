const mongoose = require('mongoose')

var Schema = mongoose.Schema

var option = new Schema({
	username:{
		type:String,
		required: true
	},
	password:{
		type:String,
		required: true
	}
})



var User = mongoose.model('mongodb://localhost:27017/User',option)

var admin = new User({
	username:"zhangsan",
	password:"123456",
})

admin.save()
	.then((data)=>{
		console.log("data")
	})
	.catch((e) =>{
		console.log(e)
	})