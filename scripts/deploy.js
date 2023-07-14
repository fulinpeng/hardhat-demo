// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre=require("hardhat");
// console.log('hre.ethers::', hre.ethers)
async function main() {
  const currentTimestampInSeconds=Math.round(Date.now()/1000);
  const unlockTime=currentTimestampInSeconds+60;

  const lockedAmount=hre.ethers.parseEther("0.001");

  const lock=await hre.ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });
  // console.log('lock::', lock)

  console.log('wait...60s...')
  await new Promise((resolve) => setTimeout(() => resolve(), 60000));

  if (network.config.chainId===11155111) {
    console.log('wait...7 blocks...')
    verify(lock.target, [unlockTime+10])
  }
  const withdrawResponse=await lock.withdraw();
  // await withdrawResponse.wait(1)

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

async function verify(contractAddress, args) {
  console.log('verify...')
  try {
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
    console.log('successful...')
  } catch (error) {
    if (error) console.log('verify error::', error)
  }
}

// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode=1;
});
