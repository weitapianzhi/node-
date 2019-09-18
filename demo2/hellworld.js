var fs = require('fs') //fs----filesystem
// fs.readFile('../网络密码.txt',(error,data) => {
// 	console.log(data.toString())
// })
// fs.writeFile('./a.txt','hello',(error)=>{
// 	console.log(error)
// })
// 

fs.readdir('./',function(e,files){
	files.forEach((item)=>{
		console.log(item)
	})
})