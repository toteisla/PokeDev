/*
 * Load modules and start server.
 */

var http = require('http');
var server = http.createServer(handler);
var io = require('socket.io').listen(server);
var fs = require('fs');
var mySQL = require('mysql');
var crypto = require('crypto');

function handler(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if(err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}

server.listen(9090);

// Load the world map collision file
var mapCollisions = loadMapCollisionFile('mapServerCollisions.json');

var onlinePlayers = [];

// Most users seen online since server started.
var mostOnline = 0;

io.set('log level', 1);


// Log message to file.
function logToFile(message) {

    var line = getTime() + ' ' + message + "\r\n";

    //fs = require('fs');
    fs.appendFile('logs/chat.log', line, function(err) {

        if(err) console.log(err);

        else console.log("The file was saved!");

    });

}

function loadMapCollisionFile (url) {
	
	var json = JSON.parse(fs.readFileSync(url, 'utf8'));

	return json;
	
}

// Report how many players online.

function playersReport() {

    var online = onlinePlayers.length;

    console.log(getTime() + " PLAYERS ONLINE: " + online + " MOST ONLINE: " + mostOnline);

}

// Records the most users seen online.

function recordMostOnline() {

    var currentOnline = onlinePlayers.length;

    if(currentOnline > mostOnline) mostOnline = currentOnline;
}

// Boots user with undefined name.

function bootUnauthorized(socket) {

    if(typeof socket.clientname === 'undefined') {

        socket.emit('error', 'You are not authenticated to the server. The server may have rebooted.');

        socket.disconnect();

        return true;

    }

    return false;

}

// Get the time as a string.

function getTime() {

    var currentTime = new Date();

    var hours = currentTime.getHours();

    var minutes = currentTime.getMinutes();

    var amOrPm = (hours > 11 ? 'PM' : 'AM');

    if(hours === 0) hours = 12;

    else if(hours > 12) hours = hours - 12;

    minutes = (minutes < 10 ? '0' + minutes : minutes);

    return hours + ':' + minutes + amOrPm;

}

function initializePlayer(id, name, x, y, facing, skin, state, map, sessionID) {

    console.log(getTime() + " ADDING PLAYER " + name);

    // Create live player object.
    var player     = {};
    player.id      = id;
    player.name    = name;
    player.pos     = {};
    player.pos.x   = x;
    player.pos.y   = y;
    player.facing  = facing;
    player.state   = state;
    player.skin    = skin;
    player.session = sessionID;
    player.room    = map;

    onlinePlayers.push(player);

    sendAnnouncement(name, "Welcome.");

    io.sockets.sockets[sessionID].roomname = map;
	
	io.sockets.sockets[sessionID].x = x;
	
	io.sockets.sockets[sessionID].y = y;
	
	io.sockets.sockets[sessionID].skin = skin;
	
	io.sockets.sockets[sessionID].facing = facing;

    joinChatRoom(name, map);

    introducePlayerToRoom(name, map);

    loadMap(sessionID, map);

    // Update most seen.
    recordMostOnline();

    // List online players.
    playersReport();

}

// Send a message from the server.

function sendAnnouncement(username, message) {

    for(var i = 0; i < onlinePlayers.length; i++) {

        if(onlinePlayers[i].name === username) {

            var sessionID = onlinePlayers[i].session;

            io.sockets.sockets[sessionID].emit('announcement', message);

            return;

        }

    }

}

// Joins a user to a chat room.

function joinChatRoom(username, roomname) {

    for(var i = 0; i < onlinePlayers.length; i++) {

        if(onlinePlayers[i].name === username) {

            var sessionID = onlinePlayers[i].session;

            var room = onlinePlayers[i].room;

            io.sockets.sockets[sessionID].join(room);

            console.log(getTime() + ' ' + username + " ENTERED " + room);

        }

    }

}

// Tell users in a room to add a new player.

function introducePlayerToRoom(username, roomname) {

    for(var i = 0; i < onlinePlayers.length; i++) {

        if(onlinePlayers[i].name === username) {

            var sessionID = onlinePlayers[i].session;

            var player = onlinePlayers[i];

            io.sockets.sockets[sessionID].broadcast.to(roomname).emit('addPlayer', username, player.pos.x, player.pos.y, player.facing, player.skin);

        }

    }

}

// Instruct client to load a map.

function loadMap(sessionID, map) {

    io.sockets.sockets[sessionID].emit('loadMap', map);
	
	console.log("Map: "+map)

}

// Removes HTML characters from messages that could allow players to phish.

function deHTML(message) {

    return message.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");

}

// Dump the contents of an object.

function dump(obj) {

    var out = '';

    for(var i in obj) {

        out += i + ": " + obj[i] + "\n";

    }

    console.log(out);

}

function sendHeartbeat() {

    io.sockets.emit('ping', {

        beat: 1

    });

    //console.log(getTime() + " Pinging all sockets.");
}

setInterval(sendHeartbeat, 8000);

io.sockets.on('connection', function(socket) {

    // The expected response sent from users when "pinged".
    socket.on('pong', function(data) {});

    socket.on('init', function(user, pass) {
	
        // Check that user not already online.
        for(var i = 0; i < onlinePlayers.length; i++) {
            if(onlinePlayers[i].name === socket.clientname) {
                console.log(getTime() + ' ' + "DROPPING " + socket.clientname + " FOR USING ALREADY IN-USE NAME.");
                socket.emit('error', 'The username ' + socket.clientname + ' is already in use. Please use another.');
                socket.disconnect();
                return;
            }
        }

		var password = crypto.createHash('md5').update(pass).digest("hex");
		
		mySQL.query('SELECT * FROM players WHERE username=? AND password=?', [user, password], function(error, result) {
            if (result && result.length) {

				var id     = parseInt(result[0].id);
                var name   = result[0].username;
                var x      = parseInt(result[0].x);
                var y      = parseInt(result[0].y);
                var facing = result[0].direction;
                var skin   = result[0].skin;
                var state  = result[0].state;
                var map    = result[0].zone;

                initializePlayer( id, name, x, y, facing, skin, state, map, socket.id );

                socket.clientname = name;
				socket.clientid = id;
			} else {

                socket.emit('error', 'No such user in database.');
				
				console.log("Login failed! User: "+user+", password: "+pass);

                socket.disconnect();

            }
		});

    });

    socket.on('getNearbyPlayers', function() {

        if(bootUnauthorized(socket)) return;

        nearbyPlayers = [];

        for(var i = 0; i < onlinePlayers.length; i++) {

            if(onlinePlayers[i].room === socket.roomname) {

                var player       = {};
                player.name      = onlinePlayers[i].name;
                player.pos       = {};
                player.pos.x     = onlinePlayers[i].pos.x;
                player.pos.y     = onlinePlayers[i].pos.y;
                player.facing    = onlinePlayers[i].facing;
                player.skin      = onlinePlayers[i].skin;
                player.moveState = onlinePlayers[i].state;

                nearbyPlayers.push(player);

            }

        }

        if(nearbyPlayers.length > 0) socket.emit('addNearbyPlayers', nearbyPlayers);

    });

    socket.on('playerStart', function() {

        if(bootUnauthorized(socket)) return;

        for(var i = 0; i < onlinePlayers.length; i++) {

            if(onlinePlayers[i].name == socket.clientname) {

                var x      = onlinePlayers[i].pos.x;
                var y      = onlinePlayers[i].pos.y;
                var facing = onlinePlayers[i].facing;
                var skin   = onlinePlayers[i].skin;
                var state  = onlinePlayers[i].state;

                socket.emit('playerStart-' + socket.clientname, x, y, facing, state, skin);

                return;

            }

        }

    });
	
	/* Player wants to move
	 *
	 * @method: Check server map collision boolean from players position
	 *
	 * @param : Return false if map collision (0) or true (player can walk there) if map collision (1)
	 *
	*/
	socket.on('playerMovement', function (mapName, coordinateX, coordinateY) {
		
		// Check if player is valid, if not kick him
		if(bootUnauthorized(socket)) return;
		
		// Define the player object
		var player = {};

        // Find the player.
        for(var i = 0; i < onlinePlayers.length; i++) {
            if(onlinePlayers[i].name == socket.clientname) {
                player = onlinePlayers[i];
                break;
            }
        }

		playerX = player.pos.x/16;
		playerY = player.pos.y/16;
		
		if ( mapCollisions.data[playerY][playerX] === 0 ) {
			socket.emit('receiveMovement-' + socket.clientname, true);
		} else if ( mapCollisions.data[playerY][playerX] === 1 ) {
			socket.emit('receiveMovement-' + socket.clientname, false);
			return;
		} else {
			socket.emit('receiveMovement-' + socket.clientname, false);
			return;
		}	
		
		//console.log("You CAN walk here! //If :: X = "+playerX+", Y = "+playerY+" Collision = "+mapCollisions.data[playerY][playerX]);
		//console.log("Player moves on X: "+playerX+", Y: "+playerY);	
		//console.log(mapCollisions.data[controller][playerX]);
	});

    socket.on('playerLeaveZone', function(mapName, goX, goY, goFacing) {

        if(bootUnauthorized(socket)) return;
		
		var player = {};

        // First find the player.
        for(var i = 0; i < onlinePlayers.length; i++) {

            if(onlinePlayers[i].name == socket.clientname) {

                player = onlinePlayers[i];

                break;

            }

        }

        // instruct others to drop this player
        socket.broadcast.to(socket.roomname).emit('dropPlayer-' + socket.clientname);
		
        socket.leave(socket.roomname);

        socket.join(mapName);
		
		socket.roomname = mapName;
		
		player.room = mapName;
		
		player.pos.x = goX;
		
		player.pos.y = goY;
		
		player.facing = goFacing;
		
		io.sockets.sockets[socket.id].emit('loadMap', mapName);
		
		io.sockets.sockets[socket.id].broadcast.to(mapName).emit('addPlayer', socket.clientname, player.pos.x, player.pos.y, player.facing, player.skin);
		
		//console.log(socket.clientname+" entered room: "+mapName+" socket room data:"+socket.roomname);

    });

    socket.on('receiveReskin', function(skin) {

        if(bootUnauthorized(socket)) return;

        console.log(getTime() + ' ' + "Player " + socket.clientname + " changed skin: " + skin);

        socket.broadcast.to(socket.roomname).emit('reskinOtherPlayer-' + socket.clientname, skin);

        for(var i = 0; i < onlinePlayers.length; i++) {

            if(onlinePlayers[i].name == socket.clientname) {

                onlinePlayers[i].skin = skin; // update server record
                break;

            }

        }

    });
	
	
	// A client's game event has to be processed server sided
	socket.on('gameEvent', function ( id, type, action, values ) {
	
	if(bootUnauthorized(socket)) return;
	
		var player = {};

        // First find the player.
        for(var i = 0; i < onlinePlayers.length; i++) {
            if(onlinePlayers[i].name == socket.clientname) {
                player = onlinePlayers[i];
                break;
            }
        }
		
		if ( action == "playerHasPokemon" ) {
			mySQL.query('SELECT * FROM players_pokemon WHERE user=? ORDER BY box DESC', [socket.clientid], function(error, result) {
				if (result && result.length) {
					socket.emit('receiveGameEvent-' + socket.clientname, action, true);
				} else {
					socket.emit('receiveGameEvent-' + socket.clientname, action, false);
				}
			});
		}
		
			
	});
	
	socket.on('addPokemon', function(data, pokemonName) {
		mySQL.query('SELECT * FROM players_pokemon WHERE user=? ORDER BY box DESC', [socket.clientname], function(error, result) {
			if (result && result.length) {
				var values = pokemonName.split(",");
				console.log(values);
				socket.broadcast.to(socket.roomname).emit('test', values);
			} else {
				console.log("Nothing found..");
			}
		});
	});

    socket.on('receiveUpdateMoveState', function(x, y, direction, state) {

        if(bootUnauthorized(socket)) return;

        socket.broadcast.to(socket.roomname).emit('moveUpdateOtherPlayer-' + socket.clientname, x, y, direction, state);

        // update players known info on server
        for(var i = 0; i < onlinePlayers.length; i++) {

            if(onlinePlayers[i].name == socket.clientname) {

                onlinePlayers[i].pos.x = x;
                onlinePlayers[i].pos.y = y;
                onlinePlayers[i].facing = direction;
                onlinePlayers[i].state = state;
                break;

            }

        }
		
		//console.log("Player: "+socket.clientname+" moved to X: "+x+" Y: "+y);

    });

    socket.on('receiveSay', function(msg) {

        if(bootUnauthorized(socket)) return;

        // Checks that message contains non-whitespace.
        if(msg.trim().length > 0) {

            socket.broadcast.to(socket.roomname).emit('newMsg', socket.clientname, deHTML(msg));

            console.log(getTime() + ' ' + "[" + socket.roomname + "][" + socket.clientname + "] " + msg);

            logToFile("[" + socket.roomname + "][" + socket.clientname + "] " + msg);

        }

    });

    socket.on('receiveTell', function(to, msg) {

        if(bootUnauthorized(socket)) return;

        // Checks that message contains non-whitespace.
        if(msg.trim().length > 0) {

            // Find recipient.
            for(var i = 0; i < onlinePlayers.length; i++) {

                if(onlinePlayers[i].name.toLowerCase() == to.toLowerCase()) {

                    io.sockets.socket(onlinePlayers[i].session).emit('incomingTell', socket.clientname, deHTML(msg));

                    console.log(getTime() + " [" + socket.clientname + "][" + to + "] " + msg);

                    logToFile("[" + socket.clientname + "][" + to + "] " + msg);

                    return;

                }

            }

            socket.emit('logError', "Player not found.");

        }

    });

    socket.on('disconnect', function() {

        if(typeof socket.clientname === 'undefined') return;

        console.log(getTime() + ' ' + socket.clientname + " DISCONNECTED");

        var player = {};

        // First find the player.
        for(var i = 0; i < onlinePlayers.length; i++) {
            if(onlinePlayers[i].name == socket.clientname) {
                player = onlinePlayers[i];
                break;
            }
        }

		//Save player data in database
		var query = 'UPDATE players SET x=?, y=?, zone=?, direction=?, skin=? WHERE id=? ', values = [player.pos.x, player.pos.y, player.room, player.facing, player.skin, player.id];
        mySQL.query(query, values);
		
		console.log("Player: "+socket.clientname+" was saved successfully");
		


        // remove client from onlinePlayers array
        for(i = 0; i < onlinePlayers.length; i++) {

            if(onlinePlayers[i].name === socket.clientname) {

                onlinePlayers.splice(i, 1);

            }

        }

        socket.broadcast.to(socket.roomname).emit('dropPlayer-' + socket.clientname, socket.clientname);

        playersReport();

    });

});

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