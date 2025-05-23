// const { Socket } = require('dgram');
// const express   =  require('express');
// const app  = express();
// const  http  = require  ('http');
// const  server = http.createServer(app);
// const {Server} = require("socket.io");
// const io  = new Server (server);

// app.get('/',(req,res) =>{
//     // res.send('<h1>Hello world</h1>')
//       res.sendFile(__dirname + '/index.html');
// }) ;

// io.on('connection',(socket) => {
//     console.log('a user  connected');
//     socket.on('disconnect',() => {
//       console.log("user disconnectd");
//     });
//     socket.on('chat message',(msg) => {
//       console.log('message:'+ msg);
//       io.emit('chat  message', msg);
//     });

// });


// server.listen(3000, () => {
//     console.log('listening on *:3000')
//     ;
//   });

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('disconnect', () => {
        console.log("user disconnected");
    });
    
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
