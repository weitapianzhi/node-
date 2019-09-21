//所有的请求都单独抽取出来  不同的路由在不同的文件中编写
const express = require('express')
const fs = require('fs')
//获得express中的Router
var router = express.Router();

router.all('*',(req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");
	next();
})

router.get('/',(req,res)=>{
	fs.readFile('./dist/index.html',(e,data)=>{
		if(e) throw e;
		res.send(data)
	})
})


//配置不同的请求响应
router.get('/home',(req,res)=>{
	console.log("wobeiqingqiule")
	res.send("请求home");
})
//:id表示该url是动态的   根据不同的id来实现不同的数据获取
router.get('/house/:id',(req,res)=>{
	//req.params.id  获取url中的id
	res.send(req.params.id);
})

router.post('/post',(req,res)=>{
	let json = {
		name:"123123",
		age:"123133"
	}
	res.send(JSON.stringify(json))
})


//将配置好的router暴露出去
module.exports = router;