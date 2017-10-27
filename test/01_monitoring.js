var Monitoring = artifacts.require("Monitoring");
chai = require("chai");
chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

expect = chai.expect;

contract("Monitoring", function(kontrakts) {
  describe("Deployed contract", function() {
    it("Get an instance", function() {
      return Monitoring.deployed().then(function(instance) {
        kontrakt = instance;
        expect(kontrakt).to.be.not.null;
      });
    });
  });

});
