const express = require('express');
const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/produce.db3'
  },
  useNullAsDefault: true
});

const router = express.Router();

router.get('/', (req, res, next) => {
  db('fruits')
    .then(fruits => {
      res.json(fruits);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  db('fruits').where({ id }).first()
    .then(fruit => {
      res.json(fruit);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const fruitData = req.body;
  db('fruits').insert(fruitData)
    .then(ids => {
      return db('fruits').where({ id: ids[0] })
    })
    .then(newFruitEntry => {
      res.status(201).json(newFruitEntry);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  const env = process.env.NODE_ENV || 'development';
  const message = env === 'development' ? err.message : 'something bad happened';
  res.status(500).json(message);
})

module.exports = router;
