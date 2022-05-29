require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember smile hover area success sound'; 
let testAccounts = [
"0xf850cf7ee01f5fa37e0f7682fc383a0698f61f2603fa9ee4d91de73830f5863b",
"0x3748819d52d6e30abc8445b88904f45b0920f72f716feaa60899744e9daeb41c",
"0x1c305718670516bf329d4d212086ab005b56bd241fa6b9b138f4c9fd763105d4",
"0x18a8d60591985cd31deed6eef8755f95c8764e8c15fe34bdf4447ccffe929920",
"0x71dd9c35ddfe5ac002d7ebf473488df0a67a032888c9156ba69a6b5fbada0499",
"0x88df974b9446747652925989370cc0e0d83a8bcd605dd7ea48d979f33a87120e",
"0x857b27ed96a027551cc064a5a9cf111f5db776fe99c15fae6b1c0c0a0290beaa",
"0x09131ebb575afa2873d95cf2c21e86513bdab345208c1f06c6f2fefea39c6136",
"0xd215ca6ad1974b0f4be98ff439dd0289771b902085a39a7c16c08732a6e86d13",
"0x187fe4b501cd6c3cd327fc23b6c4b1902823f21b3c3c8f2b27938b38a1fc88f6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


