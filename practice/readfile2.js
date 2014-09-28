var fs = require('fs');
fs.readFile('/home/sueokj/minichat/practice/readfile1.js','utf8',function(err,data){
	if(err) {
		return console.log(err);
	}
	console.log(data);
});
