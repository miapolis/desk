let socket = io();

const clientInfo = {};

const SS_GUILD_ID = 'GUILD_ID';
const SS_USERNAME = 'USERNAME';

init = () => {
    if (window.location.pathname === '/') { return; }
    if (sessionStorage.getItem(SS_USERNAME) != null) { clientInfo.username = sessionStorage.getItem(SS_USERNAME); }
    else { // User needs to be redirected to home page
        window.stop();
        sendTo('');
    }

    var savedGuildId = sessionStorage.getItem(SS_GUILD_ID) 
    if (savedGuildId != null) {
        clientInfo.guildId = savedGuildId;
        sendGuildIdConfirmation(savedGuildId);
    }

    socket.on('message', message => {
        outputMessage(message);
    });
}

sendGuildId = async (id) => {
    return new Promise((resolve, reject) => {
        socket.emit('guildId', id, (result) => {
            if (result !== false) { 
                sessionStorage.setItem(SS_GUILD_ID, id); 
                clientInfo.guildId = sessionStorage.getItem(SS_GUILD_ID);
            }
            resolve(result);
        });
    });
} 

sendGuildIdConfirmation = async (id) => {
    return new Promise((resolve) => {
        socket.emit('getGuildId', id, (result) => {
            result.forEach(message => {
                outputMessage(message);
            });
        });
    });
}

sendMessage = (message) => {
    socket.emit('chatMessage', { guildId:clientInfo.guildId, username:clientInfo.username, text:message });
};

setUsername = (username) => { 
    clientInfo.username = username;
    sessionStorage.setItem(SS_USERNAME, username);
}

sendTo = (path) => {
    path = path.startsWith('/') ? path : '/' + path;
    var pathname = window.location.pathname;
    var lastSlashIndex = pathname.lastIndexOf('/');
    var truncatedPath = pathname.substring(0, lastSlashIndex);
    window.location.href = `${truncatedPath}${path}`;
}

init();