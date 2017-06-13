/*Socket.IO se compone de dos partes:

Un servidor que se integra con (o se monta en) el servidor HTTP de Node.JS: socket.io
Una biblioteca de cliente que se carga en el lado del navegador: socket.io-client*/

var app = require('express')();//controlador
var http = require('http').Server(app);
var io = require('socket.io')(http);//se inicia una nueva estancia de socket.io pasando el http

app.get('/', function(req, res){//controlador de ruta /
   res.sendFile(__dirname + '/index.html');
  //res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){// se hace un servidor http
  console.log('listening on *:3000');
});

// eventos que emiten: se podra enviar y recibir mensajes
// mostrara los mensajes enviados en consola
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
