var net = require('net');

function Client(socket){
	this.name = null;
	this.socket = socket;
}

var clients = [];

// http://www.davidmclifton.com/2011/07/22/simple-telnet-server-in-node-js/
function cleanInput(data){
	return data.toString().replace(/(\r\n|\n|\r)/gm,"");
}

var server = net.createServer(function (socket) {
	var client = new Client(socket);
	clients.push(client);

	socket.write("Welcome, enter your username: ");

	socket.on('data', function(data) {
		var cleanData = cleanInput(data)
		if(client.name === null){
			client.name = cleanData;
			socket.write("Enter :quit to quit.\n");
			socket.write("======================\n");
			clients.forEach(function(c) {
				if(c!==client){
					c.socket.write(client.name+" has joined.\n");
				}
			});
			return;
		}

		if(cleanData === ':quit'){
			socket.end();

			return;
		}

		clients.forEach(function(c) {
			if(c!==client){
				c.socket.write(client.name+": " + data);
			}
		});
	});

	socket.on('end', function() {
		var i = clients.indexOf(client);
		clients.splice(i,1);

		clients.forEach(function(c) {
			if(c!==client){
				c.socket.write(client.name+" has quit.\n");
			}
		});
	});
});

server.listen(4091);
console.log('Chat server starts....');
