import socketio from 'socket.io-client';

const socket = socketio('http://www.softfenix.com.br:3000', {
    autoConnect: false
});

const subscribeToNewMessage = (subscribeFunction) => {
    socket.on('newMessage', subscribeFunction);
};

const sendMessage = (message) => {
    socket.emit('newMessage', message);
};

const connect = (name) => {
    socket.io.opts.query = {
        name
    }

    socket.connect();
}

const disconnect = () => {
    if (socket.connected) {
        socket.disconnect();
    }
}

export const Socket = {
    connect,
    disconnect,
    subscribeToNewMessage,
    sendMessage
}