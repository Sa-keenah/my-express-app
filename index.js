const express = require('express');
require('dotenv').config();

const app = express();
const usersRouter = require('./routes/users');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the User API!');
});

app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});