class Manager {
    
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
      this.gitHub = gitHub;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return "Manager";
    }

    getOfficeNumber() {
      return this.officeNumber;
    }
  
    getGitHub() {
      return this.gitHub;
    }
  }

  
  module.exports = Manager;