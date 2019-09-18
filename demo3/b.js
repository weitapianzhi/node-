var ccc = 1;

module.exports = {
	b:function(x){
		console.log(this.c(x))
		console.log(this.c(x))
		console.log(this.c(x))
	},
	c:function(x){
		ccc += x;
		return ccc;
	}
}