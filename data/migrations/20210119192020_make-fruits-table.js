exports.up = function(knex) {
  // make the fruits table
  return knex.schema.createTable(table => {
    // add primary key 'id' (integer)
    table.increments('fruit_id')

    // add not null, unique 'name' (varchar 128)
    // add not null 'avgWeightOz' (float)
    // add 'isDelicious' (boolean)
  })
};

exports.down = function(knex) {
  // destroy the fruits table
};
