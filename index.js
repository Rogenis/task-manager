const express = require('express');
const sequelize = require('./database');
const routes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());
app.use(routes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});
