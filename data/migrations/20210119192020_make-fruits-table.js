exports.up = function(knex) {
  // make the fruits table
  return knex.schema.createTable(table => {
    // add primary key 'id'
    // add not null 'name'
    
  })
};

exports.down = function(knex) {
  // destroy the fruits table
};
