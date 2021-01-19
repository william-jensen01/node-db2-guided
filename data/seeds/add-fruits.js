
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'apple', avgWeightOz: 1.5, isDelicious: 1, color: 'red' },
        { name: 'rowValue2', avgWeightOz: 2.5, isDelicious: 1, color: 'red' },
        { name: 'rowValue3', avgWeightOz: 3.5, isDelicious: 1, color: 'red' },
      ]);
    });
};
