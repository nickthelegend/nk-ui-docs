import Link from 'next/link';

export default function Docs() {
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
          <h3 className="text-sm font-semibold text-[#8A8A8E] uppercase tracking-wider mb-4">Getting Started</h3>
          <ul className="space-y-3 mb-8">
            <li><a href="#" className="text-white">Installation</a></li>
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">Theming</a></li>
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">CLI</a></li>
          </ul>

          <h3 className="text-sm font-semibold text-[#8A8A8E] uppercase tracking-wider mb-4">Fintech Components</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">Balance Card</a></li>
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">Crypto Amount Input</a></li>
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">Bank Transfer Form</a></li>
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">Receipt Card</a></li>
            <li><a href="#" className="text-[#8A8A8E] hover:text-white">Transaction Row</a></li>
          </ul>
        </aside>

        <main className="flex-1 p-10 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Installation</h1>
          <p className="text-[#8A8A8E] text-lg mb-8">Initialize the library in your Expo project using our robust CLI.</p>
          
          <div className="bg-[#1C1C1E] rounded-xl border border-[#2C2C2E] p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">1. Run the init command</h2>
            <code className="block bg-black p-4 rounded-lg font-mono text-sm text-[#FF7A00] mb-4">
              npx nk-ui init
            </code>
            <p className="text-[#8A8A8E]">This will copy the premium fintech theme configuration, colors, and hooks into your project.</p>
          </div>

          <div className="bg-[#1C1C1E] rounded-xl border border-[#2C2C2E] p-6">
            <h2 className="text-xl font-bold mb-4">2. Add components</h2>
            <code className="block bg-black p-4 rounded-lg font-mono text-sm text-[#FF7A00] mb-4">
              npx nk-ui add balance-card
            </code>
            <p className="text-[#8A8A8E]">Choose exactly the components you need. You own the code.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
