// imports
const {ethers, run, network}=require("hardhat")

// async main
async function main() {
    // console.log(`ethers:::::`, ethers)
    console.log("Deploying contract...")
    const SimpleStorage=await ethers.getContractFactory('SimpleStorage')
    const simpleStorage=await SimpleStorage.deploy();
    console.log("simpleStorage.target::", simpleStorage.target)

    // what happens when we deploy to our hardhat network?
    if (network.config.chainId===11155111&&process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        // await simpleStorage.deployTransaction.wait(6)
        await verify(simpleStorage.target, [])
    }

    const currentValue=await simpleStorage.retrieve()
    console.log(`Current Value is: ${currentValue}`)

    // Update the current value
    const transactionResponse=await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue=await simpleStorage.retrieve()
    console.log(`Updated Value is: ${updatedValue}`)
}

// async function verify(contractAddress, args) {
const verify=async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(`err::`, e)
        }
    }
}

// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })