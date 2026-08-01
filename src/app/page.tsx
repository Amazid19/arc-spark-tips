import { ConnectButton } from '../components/ConnectButton';
import { DonationCard } from '../components/DonationCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-6">
      {/* Header / Navbar */}
      <header className="w-full max-w-4xl flex items-center justify-between py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Arc Spark Tips
          </h1>
        </div>
        <ConnectButton />
      </header>

      {/* Main Content */}
      <section className="flex-1 flex flex-col items-center justify-center my-12 w-full">
        <DonationCard />
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-xs text-center py-4">
        Built on Arc Testnet • Powered by Next.js & wagmi
      </footer>
    </main>
  );
}
