/*
 * Server for wild and trainer battles
 */
 
var WebSocket = require('ws').Server,
    Server = new WebSocket({
        port: 9005
	}),
	fileSys = require('fs'),
	moment = require('moment'),
	mySQL = require('mysql'),
	crypto = require('crypto');

// Define what happens when a user connects
Server.on('connection', function(socket) {
	
	// Set up what to do when receiving data from the game client
    socket.on('message', function(data) {
        try {
            data = JSON.parse('[' + data + ']');
        } catch (error) {
			console.log(error);
            return;
        }

		// Does the user own a pokemon?
        if (data[1] === "getUserPokemon" && Server.validateData( [ [data[1], 'string'] ] )) {
			console.log("User 2 wants to battle!");
			// Is the pokemon owned by this user and valid?
			mySQL.query('SELECT * FROM players_pokemon WHERE user=2 AND box<0 ORDER BY box DESC', function(error, result) {
				if (result && result.length) {
				
				var battlepokemon = [];
					battlepokemon.name = [];
					battlepokemon.level = [];
					battlepokemon.moves = [];
					
					// Push stuff like name, level, moves etc.
					battlepokemon.name = result[0].name;
					battlepokemon.level = result[0].level;
					battlepokemon.moves.push(result[0].move_1);
					battlepokemon.moves.push(result[0].move_2);
					battlepokemon.moves.push(result[0].move_3);
					battlepokemon.moves.push(result[0].move_4);
					
					Server.send(socket, ["wildBattlePokemon", battlepokemon.name, battlepokemon.moves, battlepokemon.level]);
				}
				// Hacker or cheater
				else {
					console.log("User has no pokemon..");
				}
			});
		}
	
	});
	
});

// Send a message to a specific socket connection
Server.send = function(socket, message) {
    socket.send(JSON.stringify(message).slice(1, -1), function(error) {
        if (error) {
            console.log('Error:', error, socket.nick);
        }
    });
};

// Validate the data received from players
Server.validateData = function(data) {
    var i,
        type,
        valid = true;
    for (i = data.length - 1; i >= 0; i -= 1) {
        type = typeof data[i][0];
        if (type !== data[i][1]) {
            valid = false;
        } else if (data[i][2] !== undefined && data[i][2] === data[i][0]) {
            valid = false;
        }
    }
    return valid;
};

// Log messages to a channel chat log
Server.log = function(file, message, color, callBack) {
	fileSys.appendFile('logs/'+file, message+' || '+ moment().format('DD-MMMM-YYYY') +' '+ moment().format('HH:mm') +'\r\n');
};

// Print success message if everything went okay so far
console.log('\x1b[32;1mStarting battle server...\x1b[0m');
Server.log('server-log.txt', 'Started the server!');

// Initiate the database connection
mySQL.connection = 'mysql://root:@localhost/minimon';
mySQL.stream = mySQL.createConnection(mySQL.connection);
mySQL.stream.on('error', function(error) {
    mySQL.stream = mySQL.createConnection(mySQL.connection);
});
mySQL.query = function(query, values, callback) {
    mySQL.stream.query(query, values, callback);
};
global.mySQL = mySQL;

// Log errors and put the server in crash-mode
process.on('uncaughtException', function(exception) {
    console.log('uncaughtException occurred: ' + exception.stack);
    fileSys.appendFile('logs/server-error.txt', exception.stack + '\r\n\r\n');
    Server.mode = 'crashed';
    Server.log('server-log.txt', '== The server has crashed!');
});