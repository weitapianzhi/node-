const express = require('express')
const app = express();

var router = require('./router.js')


app.engine('html',require('express-art-template'));
//使用配置好的路由
//加上第一个参数后，对应路由中实现的请求地址为localhost:3000/main/路由中的请求地址
//不加第一个参数，对应路由中实现请求的地址为localhost:3000/路由中的请求地址
//根据实际需求可以对不同的请求路径使用不同的路由
app.use(router)
app.use('/public/',express.static('./public/'))
app.use('/static/',express.static('./dist/static/'))
//所有路由中没有配置的请求路径都将在下面这个中间件中进行操作
app.use((req,res)=>{
	res.send("404!!!")
})



app.listen('3000',function(){
	console.log('...running')
});

