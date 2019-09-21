const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017')


var Schema = mongoose.Schema;



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



var User = mongoose.model('User',option)

var admin = new User({
	username:"zhangsan",
	password:"123456",
})

admin.save()
	.then((data)=>{
		
	})
	.catch((e) =>{
		console.log(e)
	})
	
//信息查询
User.findOne({
	username:'zhangsan'
},(e,data)=>{
	if(e) throw e;
	console.log(data)
})
//删除
// User.deleteMany({
// 	username:'zs'
// },(e,data)=>{
// 	if(e) throw e;
// 	console.log("删除成功")
// })


//更新
// User.findByIdAndUpdate({
// 	id: ''
// },(e,data)=>{
// 	
// })
