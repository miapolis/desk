import path from 'path';
import http from 'http';
import express from 'express';
import { Socket } from 'socket.io'

const socketio = require('socket.io');

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// STATIC FOLDER
app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket:Socket) => {
    socket.emit('message', 'Welcome to Desk!');
    socket.broadcast.emit('message', 'A user has joined the chat');

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });

    // LISTENER
    socket.on('chatMessage', (msg:string) => {
        io.emit('message', msg);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
