
### 初始化项目
`yarn init`

`yarn add hardhat`

`yarn hardhat`

`yarn hardhat run scripts/deploy.js`

### 测试网 sepolia
* RPC_URL chainId 在这里找：[Sepolia RPC URL List](https://chainlist.org/chain/11155111)

* 获取不到环境变量？？？需要引入dotenv`require('dotenv').config()`

* 运行 `yarn hardhat run scripts/deploy.js --network sepolia` 得到:
`Lock with 0.001ETH and unlock timestamp 1689089487 deployed to 0x285F56139C6D76309067991010716557dee76A34`

* 去 `https://sepolia.etherscan.io/` 可通过合约地址查询

* 在 `.sol` 中使用 `console.log` 
    ```js
        import "hardhat/console.sol";
        console.log("block timestamp is %o", block.timestamp);
    ```
* 部署：
    ```js
        // 方式一：
        hre.ethers.deployContract()
    ```

    ```js
        // 方式一：
        const SimpleStorage=await ethers.getContractFactory('SimpleStorage')
        const simpleStorage=await SimpleStorage.deploy();
    ```
### 验证合约

* 安装`hardhat-verify`，`yarn add --dev @nomicfoundation/hardhat-verify`

### 自定义hardhat任务
* 新建 task 文件，然后在 `hardhat.config.js`中引入
* `yarn hardhat block-number` 或者 `yarn hardhat block-number --network sepolia` 运行任务

### 类似 ganache 的本地节点
* `yarn hardhat node`
    1. 本地节点不会在每次运行是重置
    2. 比测试网快的多
* 然后再运行：`yarn hardhat run ./scripts/deploy2.js --network localhost`

### hardhat控制台
* `yarn hardhat node` 然后 `yarn hardhat console --network localhost`
* 然后直接运行deploy.js中语句，不需要导入方法(但是可能回报语法错误，不好用)

### 测试
* 清除缓存：`yarn hardhat clean`
* 在test文件夹下编写测试文件，运行`yarn hardhat test`
* 指定运行测试用例：
    1. `yarn hardhat test --grep 更新后`
    2.  ```js 
        it.only(...)
        ```
#### hardhat-gas-reporter
* 测试花费多少gas
* `yarn add hardhat-gas-reporter --dev`，然后在`hardhat.config.js`中配置
* 运行`yarn hardhat test`即可
* `coinmarketcap`在这里获取：`https://pro.coinmarketcap.com/`

#### solidity-coverage
* 查测试用例覆盖率`yarn hardhat coverage`
### note

* 和这个帖子报错一致：https://ethereum.stackexchange.com/questions/151234/followed-hardhat-test-tutorial-and-got-typeerror-0-ethers-1-getaddress-is

6-6 
连 sepolia 会报错 error:: ConnectTimeoutError: Connect Timeout Error
