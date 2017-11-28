// Tutorial a https://socket.io/get-started/chat/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/flash_socket.html');
});

io.on('connection', function(socket){
    socket.on('ball move', function(pos){
        io.emit('ball move', pos);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

/*var app = require('express')();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});

var http = require('http').Server(app);
var io = require('socket.io')(http, {log:true, origins:'*:*'});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/flash', function(req, res){
    res.sendFile(__dirname + '/flash_socket.html');
});

io.on('connection', function(socket){
    socket.on('ball move', function(pos){
        io.emit('ball move', pos);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});*/