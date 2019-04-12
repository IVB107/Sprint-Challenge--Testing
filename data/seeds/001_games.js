exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videogames').del()
    .then(function () {
      // Inserts seed entries
      return knex('videogames').insert([
        { title: 'Skyrim', genre: 'RPG' },
        { title: 'Super Mario 64', genre: 'RPG' },
        { title: 'The Legend of Zelda: Ocarina of Time', genre: 'RPG' },
        { title: 'GTA: Vice City', genre: 'RPG' },
        { title: 'Fallout', genre: 'RPG' }
      ]);
    });
};
