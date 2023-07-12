require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_RPC_URL=process.env.PRIVATE_RPC_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY;

console.log('PRIVATE_RPC_URL::', PRIVATE_RPC_URL, ETHERSCAN_API_KEY)

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
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
};
