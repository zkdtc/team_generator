  const Employee = require("./Employee");

  class Engineer extends Employee {
    constructor(name, id,email,githubusername) {
      super(name, id, email);
      this.githubusername=githubusername
    }
    getGithub(){
      return this.githubusername;
    }
    getRole(){
      return 'Engineer';
    }
  }

  module.exports = Engineer;