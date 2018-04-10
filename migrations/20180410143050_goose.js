
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table){
  table.increments();
  table.string('name');
  table.string('age');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');

};
