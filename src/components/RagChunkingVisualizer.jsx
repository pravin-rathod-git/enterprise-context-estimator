// src/components/RagChunkingVisualizer.jsx

export default function RagChunkingVisualizer({ chunkSize, setChunkSize, chunkOverlap, setChunkOverlap, totalChunks }) {
    return (
        <div className="bg-[#0c101e] border border-[#1e243b] rounded-2xl p-6 shadow-2xl shadow-indigo-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <div>
                    <div className="text-[10px] font-bold tracking-widest text-amber-400 uppercase mb-1">Utility 03</div>
                    <h2 className="text-lg font-semibold text-white">RAG Chunking Visualizer</h2>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="text-[10px] text-[#4a5578] uppercase tracking-widest block mb-2">Chunk Size (Chars)</label>
                    <input type="number" value={chunkSize} onChange={(e) => setChunkSize(Number(e.target.value))} className="w-full bg-[#070913] border border-[#1e243b] rounded p-2 text-gray-300 font-mono text-sm focus:outline-none focus:border-amber-500/50" />
                </div>
                <div>
                    <label className="text-[10px] text-[#4a5578] uppercase tracking-widest block mb-2">Overlap Size (Chars)</label>
                    <input type="number" value={chunkOverlap} onChange={(e) => setChunkOverlap(Number(e.target.value))} className="w-full bg-[#070913] border border-[#1e243b] rounded p-2 text-gray-300 font-mono text-sm focus:outline-none focus:border-amber-500/50" />
                </div>
            </div>

            <div className="bg-[#070913] border border-[#1e243b] p-4 rounded-xl flex items-center justify-between">
                <div>
                    <p className="text-[10px] text-[#4a5578] uppercase tracking-widest mb-1">Total Document Chunks</p>
                    <p className="text-xl font-bold text-amber-400">{totalChunks.toLocaleString()}</p>
                </div>
                <div className="flex gap-1">
                    {/* Visual representation blocks */}
                    {[...Array(Math.min(totalChunks, 6))].map((_, i) => (
                        <div key={i} className="w-4 h-6 bg-amber-500/20 border border-amber-500/40 rounded-sm"></div>
                    ))}
                    {totalChunks > 6 && <span className="text-gray-500 text-xs ml-1 self-end">+{totalChunks - 6}</span>}
                </div>
            </div>
        </div>
    );
}