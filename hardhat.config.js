const fs = require('fs')
// eslint-disable-next-line import/no-extraneous-dependencies
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')

const PRIVATE_KEY = fs.readFileSync('.secret').toString().trim()

module.exports = {
  networks: {
   ganache:{
    url:'HTTP://127.0.0.1:7545',
    accounts:['0x679a41b0ecdb0dbd8a3a13c82c3b8f302f0f9df3a613be47ca1c2408ad40ea78']
   }
  },
  solidity: '0.8.4',
}
