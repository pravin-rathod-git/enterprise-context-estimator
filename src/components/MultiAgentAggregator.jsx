// src/components/MultiAgentAggregator.jsx

export default function MultiAgentAggregator({ agents, addAgent, updateAgent, removeAgent, calculateTotalMultiAgentCost }) {
    return (
        <div className="bg-[#0c101e] border border-[#1e243b] rounded-2xl p-6 shadow-2xl shadow-indigo-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase mb-1">Utility 04</div>
                        <h2 className="text-lg font-semibold text-white">Multi-Agent Aggregator</h2>
                    </div>
                </div>
                <button onClick={addAgent} className="text-xs bg-cyan-900/30 hover:bg-cyan-800/50 text-cyan-300 border border-cyan-500/30 px-3 py-1.5 rounded transition-colors">
                    + Add Agent
                </button>
            </div>

            <div className="space-y-3 max-h-32 overflow-y-auto pr-2 custom-scrollbar mb-4">
                {agents.map(agent => (
                    <div key={agent.id} className="flex gap-2 items-center bg-[#070913] border border-[#1e243b] p-2 rounded-lg">
                        <input type="text" value={agent.name} onChange={(e) => updateAgent(agent.id, 'name', e.target.value)} className="w-1/3 bg-transparent text-xs text-gray-300 focus:outline-none" />
                        <select value={agent.model} onChange={(e) => updateAgent(agent.id, 'model', e.target.value)} className="w-1/3 bg-[#161b2e] border border-[#1e243b] text-xs text-gray-400 p-1 rounded focus:outline-none">
                            <option value="gpt4o">GPT-4o</option>
                            <option value="claudeSonnet">Claude 3.5</option>
                            <option value="geminiPro">Gemini 1.5</option>
                        </select>
                        <input type="number" value={agent.estimatedTokens} onChange={(e) => updateAgent(agent.id, 'estimatedTokens', Number(e.target.value))} className="w-1/4 bg-transparent text-xs text-cyan-400 font-mono text-right focus:outline-none" />
                        <button onClick={() => removeAgent(agent.id)} className="w-1/12 text-gray-600 hover:text-red-400">×</button>
                    </div>
                ))}
            </div>

            <div className="border-t border-[#1e243b] pt-4 flex justify-between items-center">
                <span className="text-xs text-[#4a5578] uppercase tracking-widest">Total Pipeline Cost</span>
                <span className="text-xl font-bold text-cyan-400 font-mono">${calculateTotalMultiAgentCost()}</span>
            </div>
        </div>
    );
}