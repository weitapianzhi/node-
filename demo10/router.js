const express = require('express')
const fs = require('fs')
const uploadFile = require('./upload.js')
const dwload = require('./download.js')
const path = require('path')
var router = express.Router();


router.get('/',(req,res)=>{
	res.render('index.html')
})

router.post('/file',(req,res)=>{
	uploadFile.uploadFiles(req,function(oldPath,newPath){
		fs.rename(oldPath,newPath,function(e){
			if(e) throw e
		})
	})
	res.json({
		errMsg:'上传成功',
		errCode: 1,
	})
})

router.get('/readFile',(req,res)=>{
	let filename = req.query.filename;
	console.log(filename)
	let paths = path.join(__dirname,'./public/img/'+filename);
	fs.readFile(paths,(err)=>{
		if(err){
			res.json({
				errCode: 404,
				detail: '文件不存在'
			})
		}else{
			res.json({
				errCode: 200,
				detail: path.parse(paths).base
			})
		}
	})
})

router.get('/dwload',(req,res)=>{
	dwload.dwLoad(req.query.filename,res);
})


module.exports = router
