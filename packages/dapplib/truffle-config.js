require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn proof grace fork tape spoil'; 
let testAccounts = [
"0xd848cd5f0d6796af6fe8ca2664ab8a558eecc85481eae4fe815421ada1c2a63f",
"0x2db6b64ea0cc9f161e39eb2867898e2e0134ed6949e08efc35473f42f0622566",
"0x63955055355ca86a34ab19a497ea1627e70671f21a261555fd07fd4775613c4a",
"0xbaf0874893a0e9f547eca763b2fcf6ffd50c25090c674517d18cfcca059fe602",
"0x28bcd8329ed415a75dfc946f09ff3deea2750849d944ca77afab2f8935346d87",
"0xf7569762d7ad354babf56b0eb19c43feb6669a6d7b376847367354dd3a98892b",
"0x599ce44a06c70df66dea6c1ccca94d4ebdb0345b1c565fd4e903ca6b94794e30",
"0x326a830ef664083a17385508408a107c9af5510d21ffbeb338dd9664bd9439d8",
"0x3c8a6889916d9751262f3dc3b9ea45707ac1a124c9abff365c2f2af130ce64d6",
"0x431b52ee8186e61227ec15b169c3dd34aa4b88112bbfb607ad3dbe534d40ebc5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

