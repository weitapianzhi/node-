const formidable = require('formidable')
const path = require('path')

module.exports = {
	uploadFiles: function(req,callback){
		let formidables = new formidable.IncomingForm();
		formidables.uploadDir = path.join(__dirname,'./public/img')
		formidables.parse(req,function(err,fields,files){
			// console.log(files.file.path)
			let oldPath = files.file.path;
			let newPath = path.join(__dirname,'./public/img',files.file.name);
			callback(oldPath,newPath)
			return;
		})
	}
}