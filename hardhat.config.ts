import "@chainlink/hardhat-chainlink";
import { chainlink } from "hardhat";

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
      chainId: 31337,
      // allowUnlimitedContractSize: true,
      // accounts: {
      //   mnemonic: MNEMONIC,
      // },
    },
    localhost: {
      chainId: 31337,
      url: 'http://127.0.0.1:8545'
      
    },
  },
};

export default config;
