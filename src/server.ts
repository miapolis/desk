import path, { join } from 'path';
import http from 'http';
import express from 'express';
import { Socket } from 'socket.io';
import * as message from '../utils/message';

import { ClientMessage, GuildJoinData } from './core'
import { Guild, Guilds } from './content-manager'

const socketio = require('socket.io');

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// STATIC FOLDER
app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket:Socket) => {
    // socket.broadcast.emit('message', 'A user has joined the chat');

    socket.on('disconnect', () => {
        // io.emit('message', 'A user has left the chat');
    });

    // LISTENERS
    socket.on('chatMessage', (msg:ClientMessage) => {
        var guildId = msg.guildId;
        const createdMessage = message.formatMessage(msg.username, msg.text);
        Guilds.Index(guildId)?.AddMessage(createdMessage);
        io.in(guildId).emit('message', createdMessage);
    });

    socket.on('guildId', (id:string, fn:Function) => {
        fn(Guilds.FindById(id) != null);
    });

    socket.on('getGuildId', (id:string, fn:Function) => {
        var found = Guilds.FindById(id);
        if (found != null) {
            socket.join(found.GetId());
            fn(found.GetCachedMessages());
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
