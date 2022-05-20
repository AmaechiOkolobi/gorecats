import web3 from './web3';
import ICOFactory from './abi/ICOFactory.json';

const dotenv = require('dotenv');
dotenv.config();
const factoryAddress = (process.env.FACTORY_ADDRESS);
console.log(factoryAddress)

const instance = new web3.eth.Contract(
    JSON.parse(JSON.stringify(ICOFactory.abi)),
    '0xB9446A5ef4F12e4c9829aF02b38178FE723A08e9'
);

export default instance;