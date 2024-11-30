/**
 * List of all the networks supported by the Uniswap Interface
 */
export enum SupportedChainId {
  MAINNET = 1,
  SEPOLIA = 11155111,

  ARBITRUM_ONE = 42161,
  ARBITRUM_SEPOLIA = 421614,

  OPTIMISM = 10,
  OPTIMISM_SEPOLIA = 11155420,

  BASE = 8453,
  BASE_SEPOLIA = 84534,

  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
}

export enum ChainName {
  MAINNET = 'mainnet',
  SEPOLIA = 'sepolia',
  OPTIMISM = 'optimism-mainnet',
  OPTIMISM_SEPOLIA = 'optimism-sepolia',
  ARBITRUM_ONE = 'arbitrum-mainnet',
  ARBITRUM_SEPOLIA = 'arbitrum-sepolia',
  BASE = 'base',
  BASE_SEPOLIA = 'base-sepolia',
  POLYGON = 'polygon-mainnet',
  POLYGON_MUMBAI = 'polygon-mumbai',
}

export const CHAIN_NAMES_TO_IDS: { [chainName: string]: SupportedChainId } = {
  [ChainName.MAINNET]: SupportedChainId.MAINNET,
  [ChainName.SEPOLIA]: SupportedChainId.SEPOLIA,
  [ChainName.ARBITRUM_ONE]: SupportedChainId.ARBITRUM_ONE,
  [ChainName.ARBITRUM_SEPOLIA]: SupportedChainId.ARBITRUM_SEPOLIA,
  [ChainName.OPTIMISM]: SupportedChainId.OPTIMISM,
  [ChainName.OPTIMISM_SEPOLIA]: SupportedChainId.OPTIMISM_SEPOLIA,
  [ChainName.BASE]: SupportedChainId.BASE,
  [ChainName.BASE_SEPOLIA]: SupportedChainId.BASE_SEPOLIA,
  [ChainName.POLYGON]: SupportedChainId.POLYGON,
  [ChainName.POLYGON_MUMBAI]: SupportedChainId.POLYGON_MUMBAI,
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[]

export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.OPTIMISM,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.BASE,
  SupportedChainId.POLYGON,
]

/**
 * All the chain IDs that are running the Ethereum protocol.
 */
export const L1_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.SEPOLIA,
  SupportedChainId.POLYGON,
  SupportedChainId.POLYGON_MUMBAI,
] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS = [
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_SEPOLIA,
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISM_SEPOLIA,
  SupportedChainId.BASE,
  SupportedChainId.BASE_SEPOLIA,
] as const

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]

export function isPolygonChain(chainId: number): chainId is SupportedChainId.POLYGON | SupportedChainId.POLYGON_MUMBAI {
  return chainId === SupportedChainId.POLYGON || chainId === SupportedChainId.POLYGON_MUMBAI
}
