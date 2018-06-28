const path = require('path');
const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected!');

    // socket.emit from Admin text Welcome to the chat app
    socket.emit('newMessage', generateMessage(
        'Admin',
        'Welcome to the chat app'
    ));

    // socket.broadcast.emit from Admin text New user joined
    socket.broadcast.emit('newMessage', generateMessage(
        'Admin',
        'New user joined'
    ));

    socket.on('createMessage', (message, callback) => {
        console.log('User createdMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('Server: your data looks good to me!');
    });

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

server.listen(port, () => console.log(`App listening on port ${port}!`));
