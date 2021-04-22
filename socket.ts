const socketIO = require('socket.io')
let socket = { io : null };

const connect = (server) =>{
    socket.io = socketIO(server);
};

export default {
    connect,
    socket,
}