import { useState } from 'react'
import PayloadInput from './components/PayloadInput'
import TokenCostEngine from './components/TokenCostEngine'
import RagChunkingVisualizer from './components/RagChunkingVisualizer'
import MultiAgentAggregator from './components/MultiAgentAggregator'

// Current enterprise API pricing (per 1 Million Input Tokens)
const PRICING = {
  gpt4o: 5.00,
  claudeSonnet: 3.00,
  geminiPro: 3.50
};

function App() {
  // ==========================================
  // STATE & LOGIC ENGINE
  // ==========================================

  const [inputText, setInputText] = useState('')
  const characterCount = inputText.length;
  const wordCount = inputText.trim() === '' ? 0 : inputText.trim().split(/\s+/).length;
  const estimatedTokens = Math.ceil(characterCount / 4);

  const calculateCost = (ratePer1M) => {
    return ((estimatedTokens / 1000000) * ratePer1M).toFixed(4);
  };

  const [chunkSize, setChunkSize] = useState(500);
  const [chunkOverlap, setChunkOverlap] = useState(50);
  const effectiveChunkSize = Math.max(1, chunkSize - chunkOverlap);
  const totalChunks = characterCount > 0 ? Math.ceil(characterCount / effectiveChunkSize) : 0;

  const [agents, setAgents] = useState([
    { id: 1, name: 'RFP Extractor Agent', model: 'gpt4o', estimatedTokens: 2500 },
    { id: 2, name: 'Compliance Reviewer', model: 'claudeSonnet', estimatedTokens: 1500 }
  ]);

  const addAgent = () => setAgents([...agents, { id: Date.now(), name: `Agent ${agents.length + 1}`, model: 'geminiPro', estimatedTokens: 500 }]);
  const updateAgent = (id, field, value) => setAgents(agents.map(a => a.id === id ? { ...a, [field]: value } : a));
  const removeAgent = (id) => setAgents(agents.filter(a => a.id !== id));

  const calculateTotalMultiAgentCost = () => {
    return agents.reduce((total, agent) => {
      const rate = PRICING[agent.model] || 0;
      return total + ((agent.estimatedTokens / 1000000) * rate);
    }, 0).toFixed(4);
  };

  // ==========================================
  // USER INTERFACE
  // ==========================================
  return (
    <div className="min-h-screen bg-[#070913] text-gray-200 flex flex-col items-center font-sans relative overflow-x-hidden z-0">

      {/* Background Ambient Glow Effect */}
      <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Main Content Wrapper - pb-40 prevents the fixed footer from hiding content */}
      <div className="w-full max-w-6xl relative z-10 flex flex-col items-center pt-16 pb-40 px-8">

        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-900/10 mb-8 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
          <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-purple-300 uppercase">AI Context & Cost Tools</span>
        </div>

        <h1 className="text-5xl font-extrabold text-white mb-6 text-center tracking-tight drop-shadow-lg">
          Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Context</span> Estimator
        </h1>

        <p className="text-[#8b92a5] mb-12 text-center max-w-2xl text-lg font-light">
          Validate LLM deployments — analyze token limits, forecast API costs, visualize RAG chunking, and aggregate multi-agent workflows.
        </p>

        {/* Dashboard Grid Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PayloadInput inputText={inputText} setInputText={setInputText} />
          <TokenCostEngine
            characterCount={characterCount} wordCount={wordCount}
            estimatedTokens={estimatedTokens} calculateCost={calculateCost} PRICING={PRICING}
          />
          <RagChunkingVisualizer
            chunkSize={chunkSize} setChunkSize={setChunkSize}
            chunkOverlap={chunkOverlap} setChunkOverlap={setChunkOverlap} totalChunks={totalChunks}
          />
          <MultiAgentAggregator
            agents={agents} addAgent={addAgent}
            updateAgent={updateAgent} removeAgent={removeAgent} calculateTotalMultiAgentCost={calculateTotalMultiAgentCost}
          />
        </div>
      </div>

      {/* -------------------------------------------------------------------------------- */}
      {/* FINAL STICKY FOOTER - Locked to bottom, contains all mandatory info and links */}
      {/* -------------------------------------------------------------------------------- */}
      <div className="fixed bottom-0 left-0 w-full bg-[#070913]/95 backdrop-blur-xl border-t border-[#1e243b] py-4 z-50 shadow-[0_-15px_40px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Left Side: Mandatory Name & Clickable Email */}
          <div className="flex items-center gap-2 text-sm text-[#4a5578] tracking-wide font-semibold">
            <span>Developed By <span className="text-purple-400 font-bold">Pravin Rathod</span></span>
            <span className="text-[#1e243b] hidden sm:inline">|</span>
            <a
              href="mailto:pr315rathod@gmail.com"
              className="text-purple-400/80 hover:text-purple-300 hover:underline transition-all block sm:inline"
            >
              pr315rathod@gmail.com
            </a>
          </div>

          {/* Center: 4 Professional Links */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-[10px] sm:text-xs font-mono text-gray-500">
            <a href="https://github.com/pravin-rathod-git" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <span className="text-[#1e243b]">•</span>
            <a href="https://www.linkedin.com/in/pravin-rathod-237418303/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a66c2] transition-colors">LinkedIn</a>
            <span className="text-[#1e243b]">•</span>
            <a href="https://pravin-rathod-git.github.io/MY-Portfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Portfolio</a>
            <span className="text-[#1e243b]">•</span>
            <a href="https://drive.google.com/file/d/1AU5VA8e_2i5jTpXqPHUpVydD_BGy3SNN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Resume</a>
          </div>

          {/* Right Side: Mandatory Button */}
          <a
            href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#161b2e] hover:bg-purple-900/40 text-purple-300 font-medium py-2 px-6 rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-500/60 shadow-[0_0_10px_rgba(168,85,247,0.05)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] text-xs tracking-wide uppercase whitespace-nowrap"
          >
            Built for Digital Heroes
          </a>

        </div>
      </div>

    </div>
  )
}

export default App