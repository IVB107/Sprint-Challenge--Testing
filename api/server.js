const express = require('express');

const Games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

// Get --> '/'
server.get('/', async (req, res) => {
  res.status(200).send('Welcome to the Testing Sprint Challenge!');
});

module.exports = server;