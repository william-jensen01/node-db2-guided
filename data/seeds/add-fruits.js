
exports.seed = function (knex) {
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        { name: 'apple', avgWeightOz: 1.5, isDelicious: 1, color: 'red' },
        { name: 'orange', avgWeightOz: 3.5, isDelicious: 0, color: 'orange' },
        { name: 'melon', avgWeightOz: 2.5, isDelicious: 1  },
      ]);
    });
};
