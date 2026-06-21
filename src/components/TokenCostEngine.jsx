
export default function TokenCostEngine({ characterCount, wordCount, estimatedTokens, calculateCost, PRICING }) {
    return (
        <div className="bg-[#0c101e] border border-[#1e243b] rounded-2xl p-6 shadow-2xl shadow-indigo-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                    <div className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase mb-1">Utility 02</div>
                    <h2 className="text-lg font-semibold text-white">Token & Cost Engine</h2>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-[#070913] border border-[#1e243b] p-3 rounded-xl">
                    <p className="text-[10px] text-[#4a5578] uppercase tracking-widest mb-1">Characters / Words</p>
                    <p className="text-lg font-bold text-gray-200">{characterCount.toLocaleString()} <span className="text-gray-600 text-sm font-normal">/ {wordCount.toLocaleString()}</span></p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 p-3 rounded-xl shadow-[inset_0_0_15px_rgba(168,85,247,0.1)]">
                    <p className="text-[10px] text-purple-300 uppercase tracking-widest mb-1">Est. Tokens</p>
                    <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                        {estimatedTokens.toLocaleString()}
                    </p>
                </div>
            </div>

            <div className="space-y-2">
                <p className="text-[10px] text-[#4a5578] uppercase tracking-widest border-b border-[#1e243b] pb-2">Est. Cost (Input Tokens)</p>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">GPT-4o</span>
                    <span className="font-mono text-emerald-400">${calculateCost(PRICING.gpt4o)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Claude 3.5 Sonnet</span>
                    <span className="font-mono text-emerald-400">${calculateCost(PRICING.claudeSonnet)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Gemini 1.5 Pro</span>
                    <span className="font-mono text-emerald-400">${calculateCost(PRICING.geminiPro)}</span>
                </div>
            </div>
        </div>
    );
}