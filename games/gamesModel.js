const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  getAll,
  findById,
};

async function insert(character) {
  const [id] = await db('sbChars').insert(character);
  return db('sbChars')
    .where({id})
    .first();
}

function getAll() {
  return db('sbChars');
}

function findById(id) {
  return null;
}