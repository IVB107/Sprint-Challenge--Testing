const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

  describe('GET /games', () => {

    it('Should return status code 200', async () => {
      // with asnyc requests, use 'return' to wait for promise to resolve
      return request(server)
        .get('/games')
        .then(res => {
          expect(res.status).toBe(200);
        })
    });

    it('Should return an array object', async () => {
      const res = await request(server).get('/games');
      // Veryify array
      expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('Should return a list of games', async () => {
      const res = await request(server).get('/games');
      expect(res.body.length).toBeGreaterThanOrEqual(1);
    });

  });

  describe('POST /games', () => {

    it('Should respond with a status code 201', async () => {
      const game = { title: 'Halo', genre: 'RPG' };

      return request(server)
        .post('/games')
        .send(game)
        .then(res => {
          expect(res.status).toBe(201);
        })
    })

    it('Should return the title of the added game', async () => {
      const game = { title: 'Random', genre: 'Game' };
      const response = await request(server).post('/games').send(game);

      expect(response.body.title).toBe('Random');
    })

    it('Should return status code 422 if req.body is incomplete', async () => {
      const game = { title: 'AnotherGame' };
      const response = await request(server).post('/games').send(game);

      expect(response.status).toBe(422);
    })

    // Stretch 

    it('Should return status code 405 if title is not unique', async () => {
      const game = { title: 'Halo', genre: 'RPG' };
      const response = await request(server).post('/games').send(game);

      expect(response.status).toBe(405);
    })
  })

});