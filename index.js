const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const tasksProtectedRoutes = require('./routes/tasksProtectedRoutes');

const app = express();
const cors = require('cors');

app.use(cors()) // Use this after the variable declaration
app.use(bodyParser.json());

// Rotas de usuário
app.use('/user', userRoutes);

// Rotas protegidas
app.use('/', tasksProtectedRoutes);

// Rotas de tarefas
app.use('/', taskRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
