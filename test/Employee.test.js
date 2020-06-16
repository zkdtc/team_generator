const Employee = require("../lib/Employee");

describe("Employeee", () => {
  describe("getName", () => {
    it("should return the name of the employee", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      
      const result = new Employee(name,id,email).getName();

      expect(result).toEqual(name);
    });
  });

  describe("getID", () => {
    it("should return the name of the employee", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      
      const result = new Employee(name,id,email).getID();

      expect(result).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the email of the employee", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      
      const result = new Employee(name,id,email).getEmail();

      expect(result).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return the roleof the employee", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      
      const result = new Employee(name,id,email).getRole();

      expect(result).toEqual('Employee');
    });
  });


});