import Link from 'next/link';

export default function BalanceCardDocs() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <nav className="border-b border-[#2C2C2E] px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#C47A2B] to-[#E8952E]" />
          NICKTHELEGEND UI
        </Link>
      </nav>
      
      <div className="flex flex-1">
        <aside className="w-64 border-r border-[#2C2C2E] p-6 hidden md:block">
          <h3 className="text-sm font-semibold text-[#8A8A8E] uppercase tracking-wider mb-4">Fintech Components</h3>
          <ul className="space-y-3">
            <li><Link href="/docs/balance-card" className="text-white">Balance Card</Link></li>
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">Crypto Amount Input</a></li>
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">Bank Transfer Form</a></li>
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">Receipt Card</a></li>
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">Transaction Row</a></li>
          </ul>
        </aside>

        <main className="flex-1 p-10 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Balance Card</h1>
          <p className="text-[#8A8A8E] text-lg mb-8">A premium, dark-mode first portfolio balance card inspired by modern fintech applications.</p>
          
          <div className="bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl p-8 mb-8 flex items-center justify-center">
            {/* Visual representation of the card since we can't render React Native in Next.js */}
            <div className="w-full max-w-md bg-[#1C1C1E] rounded-[16px] border border-[#2C2C2E] p-5 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 bg-[#1A1A1A] px-3 py-1.5 rounded-full">
                  <div className="w-5 h-5 rounded-full bg-[#C47A2B]"></div>
                  <span className="text-sm text-[#8A8A8E] font-medium">nickthelegend</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2C2C2E] px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-[#2775CA]"></div>
                  <span className="text-sm font-semibold">USDC</span>
                  <span className="text-xs text-[#8A8A8E] ml-1">▾</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-[13px] text-[#8A8A8E] mb-1">Balance</div>
                <div className="flex items-center gap-2">
                  <div className="text-4xl font-bold tracking-tight">$4,067</div>
                  <div className="text-[#8A8A8E]">◉</div>
                </div>
                <div className="text-[13px] text-[#8A8A8E] mt-1">≈ ₦152,730</div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-[#1A1A1A] border border-[#2C2C2E] rounded-xl py-3 flex flex-col items-center gap-1">
                  <span className="text-xl">↗</span>
                  <span className="text-xs text-[#8A8A8E] font-medium">Send</span>
                </div>
                <div className="flex-1 bg-[#1A1A1A] border border-[#2C2C2E] rounded-xl py-3 flex flex-col items-center gap-1">
                  <span className="text-xl">↙</span>
                  <span className="text-xs text-[#8A8A8E] font-medium">Receive</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <div className="bg-[#1C1C1E] rounded-xl border border-[#2C2C2E] p-6 mb-8">
            <code className="block bg-black p-4 rounded-lg font-mono text-sm text-[#FF7A00] mb-4">
              npx nk-ui add balance-card
            </code>
          </div>

          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <pre className="bg-[#1C1C1E] border border-[#2C2C2E] p-6 rounded-xl overflow-x-auto text-sm text-[#E5E5EA]">
            <code>
{`import { BalanceCard } from '@/components/ui/balance-card';

export default function Dashboard() {
  return (
    <BalanceCard 
      balance="$4,067"
      localBalance="₦152,730"
      tokenBalance="0.1128 USDC"
      username="nickthelegend"
      onSend={() => console.log('Send tapped')}
      onReceive={() => console.log('Receive tapped')}
    />
  );
}`}
            </code>
          </pre>
        </main>
      </div>
    </div>
  );
}
