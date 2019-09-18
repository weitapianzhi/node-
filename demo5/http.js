const express = require('express')
const bodyParser = require('body-parser')
const url = require('url');
//express() ---> http.createServer()
var server = express();
//这里是加载模版引擎的句子，如果没有这一句下面的render函数就无法实现
server.engine('html',require('express-art-template')); 

server.use('/public/',express.static('./public/'))

//处理application/x-www-form-urlencoded格式的请求体
//extended  当值为true的时候使用queryString方式（类似JSON.parse）  为false的话使用默认qs
//这里推荐为true 
server.use(bodyParser.urlencoded({ extended: true }));

//处理application/json格式的请求体
server.use(bodyParser.json());

server
	.get('/',(req,res) => {
		//当使用render的时候，启动服务器后它会自动去根目录下面的views文件中查找，所以模版一定要放在views中
		res.render('template.html',{
			name:"123",
			password:"123132132"
		})
	})
	.get('/main',(req,res)=>{
		res.send('我是/main请求的回应');
	})
	.post('/post',(req,res)=>{
		console.log(req.body.option[0])
		let json = {
			name:"123132",
			password:"1231321"
		};
		res.send(JSON.stringify(json))
	})
	.get('/game/:id',(req,res) =>{
		console.log(req.params.id)
		res.send("11");
	})


server.listen('3000',function(){
	console.log('running....')
})