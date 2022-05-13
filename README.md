# Smart Contract Manual Deployment

> Set-up

```bash
mkdir Inbox
cd Inbox
npm init
# do set-up
npm i solc@0.4.17 @truffle/hdwallet-provider
npm i --save mocha ganache-cli web3
```

---

> Compling

`node compile.js`

---

> Running Test

- set "test":"mocha" in package.json

`npm run test`

---

> Getting Infura API Endpoint

- Sign in to [https://infura.io](https://infura.io)
- go to dashboard > Create New Project > Keys > Switch to Rinkeby and copy the url

---

> Updating to Solc v0.8.9

- reference at [Solidity Course Lecture no.64](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/learn/lecture/28943812#notes)
