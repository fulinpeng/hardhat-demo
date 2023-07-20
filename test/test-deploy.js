const {ethers, run, network}=require("hardhat")
const {assert, expect}=require('chai')

describe('simpleStorage', function () {
    let SimpleStorage;
    let simpleStorage;
    beforeEach(async function () {
        SimpleStorage=await ethers.getContractFactory('SimpleStorage')
        simpleStorage=await SimpleStorage.deploy();
    });
    it('favoriteNumber 初始值为 0', async function () {
        const currentValue=await simpleStorage.retrieve()
        const expectedValue=0;
        assert.equal(currentValue.toString(), expectedValue)
        expect(Number(currentValue)).to.equal(expectedValue)
    })
    it('更新后的值为7', async function () {
        const transactionResponse=await simpleStorage.store(7)
        await transactionResponse.wait(1)
        const updatedValue=await simpleStorage.retrieve()
        const expectedValue=7;
        assert.equal(updatedValue, expectedValue)
    })
})