'use client';

import { useState } from 'react';
import { useSendTransaction, useAccount } from 'wagmi';
import { parseEther } from 'viem';

export function DonationCard() {
  const { isConnected } = useAccount();
  const { sendTransaction, isPending, isSuccess } = useSendTransaction();
  
  const [amount, setAmount] = useState('0.001');
  const [message, setMessage] = useState('');

  // Receiver address on Arc Testnet (You can replace with your wallet address)
  const RECEIVER_ADDRESS = '0x0000000000000000000000000000000000000000'; 

  const handleDonate = () => {
    if (!amount || !RECEIVER_ADDRESS) return;
    
    sendTransaction({
      to: RECEIVER_ADDRESS as `0x${string}`,
      value: parseEther(amount),
    });
  };

  return (
    <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-2">☕ Buy me a Coffee</h2>
      <p className="text-gray-400 text-sm mb-6">Support my work on Arc Testnet with a small tip!</p>

      {/* Preset Buttons */}
      <div className="flex gap-2 mb-4">
        {['0.001', '0.005', '0.01'].map((preset) => (
          <button
            key={preset}
            onClick={() => setAmount(preset)}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
              amount === preset
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {preset} ARC
          </button>
        ))}
      </div>

      {/* Custom Amount Input */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-400 mb-1">Custom Amount (ARC)</label>
        <input
          type="number"
          step="0.001"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
          placeholder="0.001"
        />
      </div>

      {/* Optional Message Input */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-400 mb-1">Message (Optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Say something nice..."
        />
      </div>

      {/* Submit Button */}
      <button
        disabled={!isConnected || isPending}
        onClick={handleDonate}
        className={`w-full py-3 rounded-xl font-semibold transition-all shadow-lg ${
          !isConnected
            ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
            : isPending
            ? 'bg-blue-800 text-gray-300 cursor-wait'
            : 'bg-blue-600 hover:bg-blue-500 text-white'
        }`}
      >
        {!isConnected
          ? 'Connect Wallet First'
          : isPending
          ? 'Sending Coffee...'
          : `Send ${amount || '0'} ARC ☕`}
      </button>

      {isSuccess && (
        <p className="mt-4 text-center text-sm text-green-400">
          🎉 Thank you so much for the coffee!
        </p>
      )}
    </div>
  );
}
