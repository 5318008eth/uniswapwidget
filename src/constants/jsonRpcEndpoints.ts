import { SupportedChainId } from './chains'

/**
 * Fallback JSON RPC endpoints.
 * These are used if the integrator does not provide an endpoint, or if the endpoint does not work.
 *
 * MetaMask allows switching to any URL, but displays a warning if it is not on the "Safe" list:
 * https://github.com/MetaMask/metamask-mobile/blob/bdb7f37c90e4fc923881a07fca38d4e77c73a579/app/core/RPCMethods/wallet_addEthereumChain.js#L228-L235
 * https://chainid.network/chains.json
 *
 * These "Safe" URLs are listed first, followed by other fallback URLs, which are taken from chainlist.org.
 */
export const JSON_RPC_FALLBACK_ENDPOINTS: Record<SupportedChainId, string[]> = {
  [SupportedChainId.MAINNET]: [
    // "Fallback" URLs
    'https://eth.llamarpc.com/',
    'https://1rpc.io/eth',
    'https://rpc.ankr.com/eth',
    'https://eth.meowrpc.com/',
  ],
  [SupportedChainId.SEPOLIA]: [
    // "Fallback" URLs
    'https://1rpc.io/sepolia',
    'https://rpc.sepolia.org/',
    'https://rpc2.sepolia.org/',
    'https://ethereum-sepolia-rpc.publicnode.com/',
  ],
  [SupportedChainId.POLYGON]: [
    // "Safe" URLs
    'https://polygon-rpc.com/',
  ],
  [SupportedChainId.POLYGON_MUMBAI]: [
    // "Safe" URLs
    'https://matic-mumbai.chainstacklabs.com',
    'https://rpc-mumbai.maticvigil.com',
    'https://matic-testnet-archive-rpc.bwarelabs.com',
  ],
  [SupportedChainId.ARBITRUM_ONE]: [
    // "Fallback" URLs
    'https://arbitrum.llamarpc.com',
    'https://1rpc.io/arb',
    'https://arbitrum.public-rpc.com',
    'https://arbitrum.drpc.org/',
    'https://arbitrum-one.publicnode.com/',
  ],
  [SupportedChainId.ARBITRUM_SEPOLIA]: [
    // "Safe" URLs
    'https://sepolia-rollup.arbitrum.io/rpc',
    // "Fallback" URLs
    'https://endpoints.omniatech.io/v1/arbitrum/sepolia/public',
  ],
  [SupportedChainId.OPTIMISM]: [
    // "Fallback" URLs
    'https://optimism.llamarpc.com',
    'https://1rpc.io/op',
    'https://optimism.drpc.org/',
    'https://optimism-rpc.publicnode.com/',
  ],
  [SupportedChainId.OPTIMISM_SEPOLIA]: [
    // "Safe" URLs
    'https://sepolia.optimism.io/',
    // "Fallback" URLs
    'https://endpoints.omniatech.io/v1/op/sepolia/public',
    'https://optimism-sepolia.drpc.org/',
  ],
  [SupportedChainId.BASE]: [
    // "Safe" URLs
    'https://mainnet.base.org/',
    'https://base.gateway.tenderly.co',
    'https://base-rpc.publicnode.com/',
    // "Fallback" URLs
    'https://base.llamarpc.com/',
    'https://1rpc.io/base',
    'https://base.meowrpc.com/',
  ],
  [SupportedChainId.BASE_SEPOLIA]: [
    // "Safe" URLs
    'https://sepolia.base.org/',
    // "Fallback" URLs
    'https://base-sepolia-rpc.publicnode.com/',
  ],
}
