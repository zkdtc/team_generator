const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getName", () => {
    it("should return the name of the engineer", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const github='test'
      
      const result = new Engineer(name,id,email,github).getName();

      expect(result).toEqual(name);
    });
  });

  describe("getID", () => {
    it("should return the name of the engineer", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const github='test'
      
      const result = new Engineer(name,id,email,github).getID();

      expect(result).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the email of the engineer", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const github='test'
      
      const result = new Engineer(name,id,email,github).getEmail();

      expect(result).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return the roleof the engineer", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const github='test'
      
      const result = new Engineer(name,id,email,github).getRole();

      expect(result).toEqual('Engineer');
    });
  });

  describe("getGithub", () => {
    it("should return the github username of the engineer", () => {
      const name = "Alexa";
      const id='1';
      const email='test@gmail.com'
      const github='test'
      
      const result = new Engineer(name,id,email,github).getGithub();

      expect(result).toEqual(github);
    });
  });


});