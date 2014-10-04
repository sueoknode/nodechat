function normalDate(){
	var now = new Date();
	var normalDate = now.getFullYear()+'.'+
					(now.getMonth()+1)+'.'+
					 now.getDate()+' '+
					 now.getHours()+':'+
					 now.getMinutes()+':'+
					 now.getSeconds();
	return normalDate;
}

console.log(normalDate());
