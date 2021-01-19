
exports.up = function(knex) {
  return knex.schema.table('fruits', table => {
    table.text('color');
  })
};

exports.down = function(knex) {
  return knex.schema.table('fruits', tbl => {
    tbl.dropColumn('color');
  });
};
