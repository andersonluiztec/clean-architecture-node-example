const User = require('../../application/entities/User');

class mockUserRepository {

    constructor() {
        this.users = [
            new User(1, "User 1"),
            new User(2, "User 2") 
        ];        
      }

    async getAll() {
        return this.users;
    }

    async create(user) {
        this.users.push(user);
        return user;
      }

      async delete(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
          this.users.splice(index, 1);
          return true;
        }
        return false;
      }     
}

module.exports = mockUserRepository;
