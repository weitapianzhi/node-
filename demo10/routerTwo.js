const express = require('express')


var router = express.Router();


router.get('/main',(req,res)=>{
	res.send('///')
})

module.exports = router
