var fs = require('fs');

fs.appendFile('./chatserver.log','Hello, Second message\n',
	function(err){
		if(err) throw error;
});
