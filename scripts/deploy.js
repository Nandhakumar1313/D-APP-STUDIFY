const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.deployContract("Upload");
  console.log("Upload Contract Address:", await Upload.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
