// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      database:'knexdb',
      user:'postgres',
      password:'coffeeDrinker',
      seeds: {
          directory: '../seeds/authors'
      }
    }
  }
};
