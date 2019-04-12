const express = require('express');

const gamesModel = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

// GET --> '/games'
server.get('/', async (req, res) => {
  res.status(200).send('Welcome to the Testing Sprint Challenge!');
});

server.get('/games', async (req, res) => {
  try {
    const games = await gamesModel.getAll();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json(error);
}
});

// POST --> '/games'
server.post('/games', async (req, res) => {
  const { title, genre } = req.body;
  const games = await gamesModel.getAll();

  if (!title || !genre) {
    return res.status(422).json({ Message: 'Must include Title and Genre.' });
  } else {
    try {
      const game = await gamesModel.insert(req.body);
      res.status(201).json(game);
    } catch (err) {
      err.errno === 19
        ? res.status(405).json({ message: 'Title already exists.' })
        : res.status(500).json(err);
    }
  }
});

module.exports = server;