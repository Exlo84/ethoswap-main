require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    etho: {
      url: 'https://rpc.ether1.org',
      accounts: [
        'd26b752ff7c923871b81c06104486b4a4b789d59c73dd8bfc792a09047266866',
      ],
    },
  },
}
