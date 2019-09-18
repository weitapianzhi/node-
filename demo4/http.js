const http = require('http')
const template = require('art-template')
const fs = require('fs')

const server = http.createServer(listenServer).listen(3000,'localhost');

function listenServer(req,res){
	fs.readFile('./template.html',function(error,data){
		if(error){
			return res.end("失败的请求")
		}
		let html = template.render(data.toString(),{
			"name":"zhangsan",
			"password":"123456"
		})
		res.end(html)
	})
	
}