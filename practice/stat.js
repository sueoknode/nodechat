var fs = require('fs');

fs.stat('./readfile1.js',function(err,stats){
	if(err) throw err;
	console.log(stats);
	console.log('isFile: '+stats.isFile());
});
