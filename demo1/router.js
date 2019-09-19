const express = require('express')
const fs = require('fs')

var router = express.Router();

router.get('/',(req,res)=>{
	fs.readFile('./dist/index.html',(err,data) => {
		if(err) throw err;
		res.send(data.toString())
	})
})


module.exports = router;
