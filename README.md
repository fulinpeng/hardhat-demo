
### 初始化项目
`yarn init`

`yarn add hardhat`

`yarn hardhat`

### 测试网 sepolia
* RPC_URL chainId 在这里找：[Sepolia RPC URL List](https://chainlist.org/chain/11155111)

* 运行 `yarn hardhat run scripts/deploy.js --network sepolia` 得到:
`Lock with 0.001ETH and unlock timestamp 1689089487 deployed to 0x285F56139C6D76309067991010716557dee76A34`

* 去 `https://sepolia.etherscan.io/` 可通过合约地址查询

### note

* 和这个帖子报错一致：https://ethereum.stackexchange.com/questions/151234/followed-hardhat-test-tutorial-and-got-typeerror-0-ethers-1-getaddress-is

