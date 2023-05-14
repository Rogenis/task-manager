const Task = require('../models/Task');

module.exports = {
  async index(req, res) {
    const tasks = await Task.findAll();
    return res.json(tasks);
  },

  async store(req, res) {
    const { title, description, dueDate, priority } = req.body;
    const task = await Task.create({
      title,
      description,
      dueDate,
      priority,
    });
    return res.json(task);
  },

  async update(req, res) {
    const { id } = req.params;
    const { title, description, dueDate, priority } = req.body;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.update({
      title,
      description,
      dueDate,
      priority,
    });
    return res.json(task);
  },

  async delete(req, res) {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.destroy();
    return res.status(204).send();
  },
};
