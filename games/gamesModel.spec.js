const db = require('../data/dbConfig');
const gamesModel = require('./gamesModel.js');

describe('gamesModel.js', () => {

  beforeEach( async () => {
    await db('games').truncate();
  })

  describe('Insert()', () => {

    it('Should insert the provided game', async () => {
      await gamesModel.insert({ title: 'Halo 2', genre: 'RPG' });
      await gamesModel.insert({ title: 'Super Smash Bros', genre: 'Fighting' });

      const games = await db('games');
      expect(games).toHaveLength(2);
    });

    it('Should insert the provided game and check the title', async () => {
      let game = await gamesModel.insert({ title: 'Super Smash Bros', genre: 'Fighting' });
      expect(game.title).toBe('Super Smash Bros');
    });

  });

});