exports.up = function(knex) {
  // make the fruits table
  return knex.schema.createTable(table => {
    // add primary key unique not null 'id' (integer)
    table.increments();

    // add not null, unique 'name' (varchar 128)
    table.string('name', 128).notNullable().unique();

    // add not null 'avgWeightOz' (float)
    table.float('avgWeightOz').notNullable();

    // add 'isDelicious' (boolean)
    table.boolean('isDelicious');
  });
};

exports.down = function(knex) {
  // destroy the fruits table
};
