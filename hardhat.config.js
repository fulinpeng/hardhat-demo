require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter");
require("solidity-coverage");
require('./tasks/block-number')

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_RPC_URL=process.env.PRIVATE_RPC_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY=process.env.COINMARKETCAP_API_KEY;

console.log('PRIVATE_RPC_URL::', PRIVATE_RPC_URL, ETHERSCAN_API_KEY)

// PRIVATE_RPC_URL 在这里获取 https://chainlist.org/chain/11155111?testnets=true
module.exports={
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: PRIVATE_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      // hardhat 自动创建了 100 个 account ，这里不用提供 accounts
      chainId: 31337,
    }
  },
  solidity: "0.8.9",
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: true,
    noColors: true,
    outputFile: 'gas-report.txt',
    currency: 'USD',
    coinmarketcap: COINMARKETCAP_API_KEY, // 获取方式：https://pro.coinmarketcap.com/
  }
};
