const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')


const router = require('./router')
const router_two = require('./routerTwo')


var app = express();

app.engine('html',require('express-art-template'))
app.set('views',path.join(__dirname,'./'))

app.use('/public',express.static('./public'))
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())



app.use(router)
app.use('/home',router_two)


app.listen('5000',function(e){
	console.log("running...")
})
