require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_RPC_URL=process.env.PRIVATE_RPC_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;

// PRIVATE_RPC_URL=`https://rpc.sepolia.org`
// PRIVATE_KEY=`fa890ff8d55db5595b641cfa3d42be684642bdb0124356eedcc710a167843da5`

console.log('PRIVATE_RPC_URL::', PRIVATE_RPC_URL)

// PRIVATE_RPC_URL 在这里获取 https://chainlist.org/chain/11155111?testnets=true
module.exports={
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: PRIVATE_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    }
  },
  solidity: "0.8.9",
};
