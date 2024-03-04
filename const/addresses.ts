export const TRANSFER_CONTRACT_ADDRESS = '0xCF2B831f8336E97b199C2c9E34F84c9E8c72560E';
export const CALIM_TOKEN_CONTRACT_ADDRESS = '';

export const FEE_TOKEN_ADDRESS = '';
export const FEE_AMOUNT = '0';
export const FEE_RECEIVER = '0x723A159B280E23889E78ae3c397b52cca21eCd3b';

export const HERO_IMAGE_URL = 'ipfs://QmUWVRuyFuVfo45estsJt2VaQUSEc4uwcPoeWFaeYxERua/seanwatase_isometric_crypto_transferring_from_one_wallet_to_ano_96084ff1-fe03-4dfd-8783-a3ecc85a24da.png';
export const FEATURES_IMAGE_URL = 'ipfs://QmcTgfb2AXj1TcVj4i9jSgZc8A8LhxHYCXbu5Mngsx7iVT/Coins.png';
export const CLAIM_TOKEN_IMAGE = 'ipfs://QmUYpRzQE6bebNuuVriyd2n163wAKu1pNRusqQraeRU5bX/seanwatase_isometric_black_crypto_coin_transparent_background_3dcbfe44-babc-45f5-9d43-881d85d2293d.png';

export const MARKETPLACE_ADDRESS ='';
export const NFT_COLLECTION_ADDRESS = '';

export const NETWORKMAINNET = {
    // === Required information for connecting to the network === \\
    chainId: 245022934, // Chain ID of the network
    // Array of RPC URLs to use
    rpc: 
    [
      "https://neon-proxy-mainnet.solana.p2p.org",
      "https://proxy.mainnet.neonlabs.org/solana",
      "https://neon-mainnet.everstake.one"
    ],
    
    // === Information for adding the network to your wallet (how it will appear for first time users) === \\
    // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
    nativeCurrency: {
      decimals: 18,
      name: "Neon EVM MainNet",
      symbol: "NEON",
    },
    shortName: "neonevm", // Display value shown in the wallet UI
    slug: "neonevm", // Display value shown in the wallet UI
    testnet: false, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "Neon EVM MainNet", // Name of the network
    name: "Neon EVM MainNet", // Name of the network
    }

    export const NETWORKDEVNET = {
        // === Required information for connecting to the network === \\
        chainId: 245022926, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: 
        [
          "https://devnet.neonevm.org",
        ],
        
        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Neon EVM DevNet",
          symbol: "NEON",
        },
        shortName: "neonevm", // Display value shown in the wallet UI
        slug: "neonevm", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "Neon EVM DevNet", // Name of the network
        name: "Neon EVM DevNet", // Name of the network
        }