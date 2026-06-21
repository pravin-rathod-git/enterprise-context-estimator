export default function PayloadInput({ inputText, setInputText }) {
    return (
        <div className="bg-[#0c101e] border border-[#1e243b] rounded-2xl p-6 shadow-2xl shadow-indigo-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </div>
                <div>
                    <div className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase mb-1">Utility 01</div>
                    <h2 className="text-lg font-semibold text-white">System Prompt Payload</h2>
                </div>
            </div>

            <textarea
                className="w-full h-48 p-4 bg-[#070913] border border-[#1e243b] rounded-xl text-gray-300 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:outline-none transition-all resize-none placeholder-[#4a5578] font-mono text-sm shadow-inner"
                placeholder="Paste your dense corporate tender documents, JSON arrays, or RAG context here to begin estimation..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
        </div>
    );
}