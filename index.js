const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./routes/app.routes');
require('./config/db.connection');
require('dotenv').config();
const port = process.env.PORT;
const socketIo = require('socket.io');
const http = require('http');

const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use((req, res, next) => {
    console.log("req  come ...", req.url);
    next();
})
app.use('/', route);


app.get('**', (req, res) => {
    res.status(404).send({ message: 'No route found!' });
});

server.listen(port || 3000, () => {
    console.log(`Server is running and Socket.IO is connected on port ${port || 3000}`);
});
