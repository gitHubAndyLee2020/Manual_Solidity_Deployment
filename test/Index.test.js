const assert = require('assert')
const ganache = require('ganache-cli')
const { compileStandardWrapper } = require('solc')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile')

let accounts
let inbox

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts()
  // Use one of those accounts to deploy
  // the contract

  // first line: pass the contract object to the constructor
  // second line: pass the constructor arguments (including the bytecode)
  // third line: pass the contract's ABI

  // deployment: need abi and bytecode
  // interaction: need abi and contract address
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['Hi there!'],
    })
    .send({ from: accounts[0], gas: '1000000' })
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    // checks the contract's address to check if it's deployed
    // assert.ok() checks if the passed variable is non-null or non-undefined
    assert.ok(inbox.options.address)
  })

  it('has a default message', async () => {
    // fetch message (which is public / equivalent to getMessage())
    // call() is a method that calls a contract function without modifying the data
    const message = await inbox.methods.message().call()
    assert.equal(message, 'Hi there!')
  })

  it('can change the message', async () => {
    // send() is a method that calls a contract function to modify the data
    // the test will fail if the message is not send
    await inbox.methods.setMessage('bye').send({ from: accounts[0] })
    const message = await inbox.methods.message().call()
    assert.equal(message, 'bye')
  })
})

/*
class Car {
  park() {
    return 'stopped'
  }

  drive() {
    return 'vroom'
  }
}

let car

// executed before each test
beforeEach(() => {
  car = new Car()
})

// 'Car' is used only for naming
describe('Car', () => {
  it('can park', () => {
    assert.equal(car.park(), 'stopped')
  })
  it('can drive', () => {
    assert.equal(car.drive(), 'vroom')
  })
})
*/
