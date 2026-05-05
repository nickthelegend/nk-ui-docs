import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <nav className="border-b border-[#2C2C2E] px-8 py-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#C47A2B] to-[#E8952E]" />
          NICKTHELEGEND UI
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/docs" className="text-[#8A8A8E] hover:text-white transition-colors">Documentation</Link>
          <Link href="/docs" className="text-[#8A8A8E] hover:text-white transition-colors">Components</Link>
          <a href="https://github.com/nickthelegend/nk-ui" className="text-[#8A8A8E] hover:text-white transition-colors">GitHub</a>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#2C2C2E] bg-[#1C1C1E] text-[#8A8A8E] text-xs font-semibold tracking-wider mb-8 uppercase">
          Now Available for Expo & React Native
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C47A2B] to-[#FF7A00]">Premium</span> Fintech Apps.
        </h1>
        <p className="text-[#8A8A8E] text-xl md:text-2xl max-w-3xl mb-12">
          A shadcn-style component library designed from the ground up for dark-mode first, Web3, and modern finance applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/docs" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C47A2B] to-[#E8952E] text-white font-bold text-lg hover:opacity-90 transition-opacity">
            Get Started
          </Link>
          <code className="px-6 py-4 rounded-full border border-[#2C2C2E] bg-[#1C1C1E] text-white font-mono flex items-center gap-3 text-lg">
            <span className="text-[#8A8A8E]">$</span> npx nk-ui init
          </code>
        </div>
      </main>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,122,43,0.15)_0%,transparent_50%)] pointer-events-none z-0" />
    </div>
  );
}
