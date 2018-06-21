const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath));

app.listen(port, () => console.log(`App listening on port ${port}!`));
