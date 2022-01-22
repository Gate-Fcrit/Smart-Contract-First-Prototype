const Migrations = artifacts.require("Manager.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
