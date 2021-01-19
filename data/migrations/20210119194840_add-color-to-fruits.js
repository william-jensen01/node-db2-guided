
exports.up = function(knex) {

};

exports.down = function(knex) {
  return knex.schema.table('fruits', tbl => {
    tbl.dropColumn('color');
  });
};
