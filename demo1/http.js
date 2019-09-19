const express = require('express')
const app = express();
const router = require('./router.js')

app.engine('html',express.static('express-art-template'));

app.use('/static',express.static('./dist/static'))
app.use(router)

app.listen("3000",function(){
	console.log('running...')
})



