import { defineChain } from 'viem';

export const arcTestnet = defineChain({
  id: 50, // Arc Testnet Chain ID
  name: 'Arc Testnet',
  nativeCurrency: {
    name: 'Arc Token',
    symbol: 'ARC',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.arc.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'ArcScan',
      url: 'https://explorer.testnet.arc.network',
    },
  },
  testnet: true,
});
