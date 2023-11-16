const express = require('express');
const userController = require('../../adapters/controllers/UserController');

const app = express();
const port = 3000

app.use(express.json());
app.use('/users', userController);

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
  })

module.exports = app;