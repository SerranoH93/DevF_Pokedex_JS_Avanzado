const axios = require("axios");
const express = require('express');
const morgan = require('morgan');
const router = require('./src/routes');
const server = require('./src/server');
const PORT = 3001;

//*Middlewares
server.use((req, res, next) => {    
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());
server.use(morgan("dev"));

server.use("/pokedex", router);

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});