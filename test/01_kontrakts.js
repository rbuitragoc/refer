var Kontrakt = artifacts.require("Kontrakt");
chai = require("chai");
chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

expect = chai.expect;

contract("Kontrakt", function(kontrakts) {
  describe("Deployed contract", function() {
    it("Get an instance", function() {
      return Kontrakt.deployed().then(function(instance) {
        kontrakt = instance;
        expect(kontrakt).to.be.not.null;
      });
    });
  });

});
