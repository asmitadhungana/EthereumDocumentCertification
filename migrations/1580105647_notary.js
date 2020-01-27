const  Notary = artifacts.require("Notary");

module.exports = function(deployer) {
	deployer.deploy(Notary);  // Use deployer to state migration tasks.
};
