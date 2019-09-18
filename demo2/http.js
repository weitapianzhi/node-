//使用 HTTP 服务器和客户端
var http = require('http')
//创建一个web服务器 并且返回server实例
var server = http.createServer()

//当服务器收到request事件的时候触发后面的回调函数
server.on('request',function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	console.log("收到客户端的请求了")
	let arr = {
		"name": "zhangsan",
		"password":"123456"
	};
	//返回的信息放在write()里
	// response.write(JSON.stringify(array));
	//或者通过end发送-----推荐
	//结束这次请求，如果不结束客户端将接收不到信息
	response.end(JSON.stringify(arr))
})

//绑定端口号，启动服务器
server.listen(3000,function(){
	
})