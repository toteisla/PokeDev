document.addEventListener("DOMContentLoaded", function() {

    // Define the server
    var Server = {};

    // Server port
    Port = 9005;

    // Try a new connection
    Server = new WebSocket('ws://' + window.location.host + ':' + Port + '/');
    Server.connected = false;

    // Send a clean message to the server
    Server.relay = function(data) {
        Server.send(JSON.stringify(data).slice(1, -1));
    };

    // The client connects to the server
    Server.addEventListener('open', function() {
        Server.relay([1, "Felix"]);
        Server.connected = true;
    });

    // When the connection closes
    Server.addEventListener('close', function() {
        Server.connected = false;
    });

    // Deal with data received from the server
    Server.addEventListener('message', function(event) {
        var data = JSON.parse('[' + event.data + ']');
        console.log(data);
    });
});