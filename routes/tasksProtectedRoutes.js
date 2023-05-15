const express = require('express');
const Task = require('../models/Task');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

// Rota protegida para listar tarefas
router.get('/', verifyToken, async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to list tasks' });
  }
});

module.exports = router;
