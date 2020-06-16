const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getName", () => {
    it("should return the name of the intern", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const school='UC Berkeley'
      
      const result = new Intern(name,id,email,school).getName();

      expect(result).toEqual(name);
    });
  });

  describe("getID", () => {
    it("should return the name of the intern", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com';
      const school='UC Berkeley';
      
      const result = new Intern(name,id,email,school).getID();

      expect(result).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the email of the intern", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const school='UC Berkeley'
      
      const result = new Intern(name,id,email,school).getEmail();

      expect(result).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return the role of the intern", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const school='UC Berkeley'
      
      const result = new Intern(name,id,email,school).getRole();

      expect(result).toEqual('Intern');
    });
  });

  describe("getSchool", () => {
    it("should return the school of the Intern", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const school='UC Berkeley'
      
      const result = new Intern(name,id,email,school).getSchool();

      expect(result).toEqual(school);
    });
  });


});