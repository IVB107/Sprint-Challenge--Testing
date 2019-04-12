const express = require('express');

const Games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

// GET --> '/games'
server.get('/games', async (req, res) => {
  res.status(200).send('Welcome to the Testing Sprint Challenge!');
});

// POST --> '/games'
server.post('/games', async (req, res) => {
  const { title, genre } = req.body;
  if (!title || !genre) {
    return res.status(422).json({ Message: 'Must include Title and Genre.' });
  } else {
    try {
      const game = await Games.insert(req.body);
      res.status(201).json(game);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

module.exports = server;