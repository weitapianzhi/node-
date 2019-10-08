const path = require('path')
const fs = require('fs')

module.exports = {
	dwLoad(fileName,res){
		let filename = fileName;
		let filepath = path.join(__dirname,'./public/img/' + filename);
		let stats = fs.statSync(filepath);
		if(stats.isFile()){
		   res.set({
			  'Content-Type': 'application/octet-stream',
			  'Content-Disposition': 'attachment; filename='+fileName,
			  'Content-Length': stats.size
			});
			fs.createReadStream(filepath).pipe(res);
		}else{
			res.json({
				errCode:'404',
				detail:'下载失败'
			});
		}
	}
}