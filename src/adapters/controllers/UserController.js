const express = require('express');
const ListUsers = require('../../application/use_cases/ListUsers');
const CreateUser = require('../../application/use_cases/CreateUser');
const DeleteUser = require('../../application/use_cases/DeleteUser');
const User = require('../../application/entities/User');
const mockUserRepository = require('../repositories/mockUserRepository');

const userRepository = new mockUserRepository();

const router = express.Router();

router.get('/', async (req, res) => {
    const listUsers = new ListUsers(userRepository);
    const users = await listUsers.execute();
    res.json(users);
  });

  router.post('/', async (req, res) => {
    const createUser = new CreateUser(userRepository);
    const user = await createUser.execute(new User(req.body.id, req.body.name));
    res.status(201).json(user);
  });

  router.delete('/:id', async (req, res) => {
    const deleteUser = new DeleteUser(userRepository);
    const success = await deleteUser.execute(parseInt(req.params.id));
    if (success) {
      res.status(204).send();
    } else { res.status(404).send('Usuario não encontrado'); } });

  module.exports = router;
