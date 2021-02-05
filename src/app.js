const config = require('./config');
const loaders = require('./loaders');
const express = require('express');
const routes = require('./api');
const http = require('http');
const socketio = require('socket.io');
const apiErrorHandler = require('./helpers/apiErrorHandler');
const socket = require('./services/webSocket');

async function startServer() {

    const app = express();
    const server = http.createServer(app);
    const io = socketio(server, {cors: {
        origin: config.react_url,
        methods: ["GET", "POST"]
    }});

    await loaders({ expressApp: app });
    
    //handle routes
    routes.endPointsHandler(app);

    
    //Error handling middleware
    app.use(apiErrorHandler);

    socket(io);

    server.listen(config.port, err => {
        if (err) {
        console.log(err);
        return;
        }
        console.log(`Your server is ready on port ${config.port}`);
    });
}

startServer();