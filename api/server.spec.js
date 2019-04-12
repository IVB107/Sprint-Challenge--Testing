const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

  describe('GET /games', () => {

    it('Should return status code 200', () => {
      // with asnyc requests, use 'return' to wait for promise to resolve
      return request(server)
        .get('/games')
        .then(res => {
          expect(res.status).toBe(200);
        })
    });

    it('Should return a list of games', () => {
      return request(server)
        .get('/games')
        .then(res => {
          expect(res.text).toBe('Welcome to the Sprint Challenge!');
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        })
    });

  });

  describe('POST /games', () => {

    it('Should respond with a status code 201', () => {
      const game = { title: 'Halo', genre: 'RPG' };

      return request(server)
        .post('/games')
        .send(game)
        .then(res => {
          expect(res.status).toBe(201);
        })
    })

    it('Should return the added game', async () => {
      const game = { title: 'Halo', genre: 'RPG' };
      const response = await request(server).post('/games').send(game);

      expect(response.body.title).toBe('Halo');
    })
  })

  // describe('Delete /', () => {

  //   it('Should respond with a status code 204', () => {
  //     const game = req.
  //     // stuff
  //     return request(server)
  //       .delete('/games')
  //       .send(game)
  //       .then(res => {
  //         expect(res.status).toBe(204);
  //       })
  //   })

  // })

});