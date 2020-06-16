const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getName", () => {
    it("should return the name of the Manager", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const office='206'
      
      const result = new Manager(name,id,email,office).getName();

      expect(result).toEqual(name);
    });
  });

  describe("getID", () => {
    it("should return the name of the manager", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com';
      const office='206'
      
      const result = new Manager(name,id,email,office).getID();

      expect(result).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the email of the manager", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const office='206'
      
      const result = new Manager(name,id,email,office).getEmail();
      expect(result).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return the role of the intern", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const office='206'
      
      const result = new Manager(name,id,email,office).getRole();

      expect(result).toEqual('Manager');
    });
  });

  describe("getOffice", () => {
    it("should return the office number of the manager", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const office='206'
      
      const result = new Manager(name,id,email,office).getOffice();

      expect(result).toEqual(office);
    });
  });


});