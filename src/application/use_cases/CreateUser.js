const User = require('../../application/entities/User');

class CreateUser {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(User) {
      return this.userRepository.create(User);
    }
  }
  
  module.exports = CreateUser;