const db = require('../data/dbConfig');
const gamesModel = require('./gamesModel.js');

describe('gamesModel.js', () => {

  beforeEach( async () => {
    await db('videogames').truncate();
  })

  describe('Insert()', () => {

    it('Should insert the provided game', async () => {
      await gamesModel.insert({ title: 'Halo 2', genre: 'RPG' });
      await gamesModel.insert({ title: 'Super Smash Bros', genre: 'Fighting' });

      const games = await db('videogames');
      expect(games).toHaveLength(2);
    });

    it('Should insert the provided gane and check the title', async () => {
      let game = await gamesModel.insert({ title: 'Super Smash Bros', genre: 'Fighting' });
      expect(game.title).toBe('Super Smash Bros');
    });

  });

  // describe('Remove()', async () => {
    
  //   it('Should remove the game specified by ID', async () => {
  //     const games = await db('videogames');
  //     await gamesModel.remove({ id });

  //     expect(games.id).toBeUndefined();
  //   })
  // })

});