const hre = require("hardhat");

async function main() {
  const ArtToken = await hre.ethers.getContractFactory("ArtToken");
  const artToken = await ArtToken.deploy(100000000, 50);

  await artToken.deployed();

  console.log("Art Token deployed: ", artToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
