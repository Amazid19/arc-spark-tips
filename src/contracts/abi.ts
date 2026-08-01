export const coffeeAbi = [
  {
    inputs: [
      { internalType: "string", name: "_message", type: "string" },
      { internalType: "string", name: "_name", type: "string" },
    ],
    name: "buyCoffee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
      { indexed: false, internalType: "string", name: "message", type: "string" },
      { indexed: false, internalType: "string", name: "name", type: "string" },
    ],
    name: "NewMemo",
    type: "event",
  },
] as const;
