const express = require('express');
require('dotenv').config();
const usersRouter = require('./routes/users');
const errorHandler = require('./middleware/errorHandler'); // Import

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the User API!');
});

app.use('/users', usersRouter);

// Catch-all 404 handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Central error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});