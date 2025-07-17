const express = require('express');
const router = express.Router();
const db = require('../db/db');

// GET all users
router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// GET user by ID
router.get('/:id', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id]);

    if (result.rows.length === 0) {
      const error = new Error('User not found');
      error.status = 404;
      return next(error);
    }

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// POST create new user
router.post('/', async (req, res, next) => {
  const { name, email, age } = req.body;

  // Basic validation
  if (!name || !email || typeof age !== 'number') {
    const error = new Error('Invalid input: name, email, and age are required');
    error.status = 400;
    return next(error);
  }

  try {
    const result = await db.query(
      'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
      [name, email, age]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// PUT update user
router.put('/:id', async (req, res, next) => {
  const { name, email, age } = req.body;

  if (!name || !email || typeof age !== 'number') {
    const error = new Error('Invalid input: name, email, and age are required');
    error.status = 400;
    return next(error);
  }

  try {
    const result = await db.query(
      'UPDATE users SET name=$1, email=$2, age=$3 WHERE id=$4 RETURNING *',
      [name, email, age, req.params.id]
    );

    if (result.rows.length === 0) {
      const error = new Error('User not found');
      error.status = 404;
      return next(error);
    }

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// DELETE user
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [req.params.id]);

    if (result.rows.length === 0) {
      const error = new Error('User not found');
      error.status = 404;
      return next(error);
    }

    res.status(204).send(); // No content
  } catch (err) {
    next(err);
  }
});

module.exports = router;