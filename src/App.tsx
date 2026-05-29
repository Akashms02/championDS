import React, { useState, useTransition } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Layers, 
  Play, 
  RefreshCw, 
  BookOpen, 
  Flame,
  MousePointerClick,
  Code
} from 'lucide-react';

interface LogEntry {
  id: number;
  timestamp: string;
  message: string;
  type: 'compiler' | 'action' | 'system';
}

function App() {
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [accentColor, setAccentColor] = useState<'purple' | 'cyan' | 'pink'>('purple');
  
  // React 19 useTransition for Async Action simulation
  const [isPending, startTransition] = useTransition();
  const [actionMessage, setActionMessage] = useState('Idle');
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: 1, timestamp: new Date().toLocaleTimeString(), message: 'React Compiler loaded: Active', type: 'compiler' },
    { id: 2, timestamp: new Date().toLocaleTimeString(), message: 'Tailwind CSS v4 engine ready', type: 'system' }
  ]);

  const addLog = (message: string, type: 'compiler' | 'action' | 'system') => {
    setLogs(prev => [
      { id: Date.now(), timestamp: new Date().toLocaleTimeString(), message, type },
      ...prev.slice(0, 7)
    ]);
  };

  // Heavy computation simulation
  // The React Compiler automatically memos this component and sub-elements!
  // In a manual React app, we would write useMemo. Here, we write raw JS.
  const allItems = [
    { name: 'React 19 Server Components', category: 'Core', desc: 'Render on server first.' },
    { name: 'React Compiler (Forget)', category: 'Optimization', desc: 'No more useMemo or useCallback.' },
    { name: 'Tailwind CSS v4', category: 'Styling', desc: 'CSS-first compiler engine.' },
    { name: 'Vite 8 Build Tool', category: 'Bundler', desc: 'Ultra-fast HMR and bundling.' },
    { name: 'Rolldown Bundler', category: 'Future', desc: 'Rust-based successor to Rollup.' },
    { name: 'useTransition Hook', category: 'State', desc: 'Manage async state transitions natively.' },
    { name: 'Form Actions', category: 'Forms', desc: 'Submit forms asynchronously.' },
    { name: 'Document Metadata Support', category: 'SEO', desc: 'Native head element injection.' }
  ];

  const filteredItems = allItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Triggering simulated React 19 form/action transition
  const handleAsyncSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActionMessage('Submitting...');
    addLog('Action started: Saving settings...', 'action');
    
    startTransition(async () => {
      // Simulate API latency
      await new Promise(resolve => setTimeout(resolve, 1500));
      setActionMessage('Settings saved successfully!');
      addLog('Action resolved: Settings updated successfully', 'action');
    });
  };

  const getAccentClass = () => {
    switch (accentColor) {
      case 'cyan': return 'from-cyan-500 to-emerald-500 text-cyan-400 border-cyan-500/20 hover:shadow-cyan-500/10 focus-visible:ring-cyan-500';
      case 'pink': return 'from-pink-500 to-rose-500 text-pink-400 border-pink-500/20 hover:shadow-pink-500/10 focus-visible:ring-pink-500';
      default: return 'from-purple-500 to-indigo-500 text-purple-400 border-purple-500/20 hover:shadow-purple-500/10 focus-visible:ring-purple-500';
    }
  };

  const getAccentBtn = () => {
    switch (accentColor) {
      case 'cyan': return 'bg-cyan-500 hover:bg-cyan-600 text-slate-950 focus:ring-cyan-500/50';
      case 'pink': return 'bg-pink-500 hover:bg-pink-600 text-white focus:ring-pink-500/50';
      default: return 'bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-500/50';
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Decorative Background Orbs & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
      
      {/* Dynamic light sources */}
      <div className={`absolute top-[-10%] left-[20%] w-[600px] height-[600px] rounded-full blur-[140px] opacity-20 transition-all duration-1000 ${
        accentColor === 'purple' ? 'bg-purple-600' : accentColor === 'cyan' ? 'bg-cyan-600' : 'bg-pink-600'
      }`}></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] height-[400px] bg-indigo-900 rounded-full blur-[120px] opacity-15"></div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 mb-10 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl flex items-center justify-center">
              <Cpu className={`w-8 h-8 animate-pulse ${
                accentColor === 'purple' ? 'text-purple-400' : accentColor === 'cyan' ? 'text-cyan-400' : 'text-pink-400'
              }`} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                React 19 + Tailwind v4
              </h1>
              <p className="text-sm text-slate-400 font-medium">React Compiler Enabled Starter Kit</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Color Theme Selector */}
            <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button 
                onClick={() => { setAccentColor('purple'); addLog('Theme changed to Purple', 'system'); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${accentColor === 'purple' ? 'bg-purple-500/20 text-purple-300' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Purple
              </button>
              <button 
                onClick={() => { setAccentColor('cyan'); addLog('Theme changed to Cyan', 'system'); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${accentColor === 'cyan' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Cyan
              </button>
              <button 
                onClick={() => { setAccentColor('pink'); addLog('Theme changed to Pink', 'system'); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${accentColor === 'pink' ? 'bg-pink-500/20 text-pink-300' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Pink
              </button>
            </div>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 rounded-xl transition-all shadow-md flex items-center justify-center"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-6 animate-fade-in shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">React Compiler Active</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-display text-white mb-6 leading-[1.1]">
            Build Faster apps with <br className="hidden sm:inline" />
            <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${getAccentClass()}`}>
              Zero Memoization Boilerplate
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Welcome to the future of React. The React Compiler automatically optimizes rendering at compile-time. No more <code className="bg-slate-900 text-purple-300 border border-slate-800 px-1.5 py-0.5 rounded text-sm">useMemo</code> or <code className="bg-slate-900 text-purple-300 border border-slate-800 px-1.5 py-0.5 rounded text-sm">useCallback</code> needed. Combined with the performance of Tailwind CSS v4.
          </p>
        </section>

        {/* Features / Demos Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: React Compiler Autodemo */}
          <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Layers className={`w-5 h-5 ${accentColor === 'purple' ? 'text-purple-400' : accentColor === 'cyan' ? 'text-cyan-400' : 'text-pink-400'}`} />
                  <h3 className="text-lg font-bold text-white">Auto-Memoization Sandbox</h3>
                </div>
                <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-lg font-medium border border-slate-700">Reactive Filtering</span>
              </div>

              <p className="text-sm text-slate-400 mb-6">
                Below, type a search keyword. Because of the <strong>React Compiler</strong>, typing into the query input filters the items instantly. The rest of the component tree is intelligently memoized without manual optimizations.
              </p>

              {/* Interactive Sandbox UI */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl">
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Filter Items</label>
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      addLog(`Search query updated to "${e.target.value}"`, 'compiler');
                    }}
                    placeholder="Type to filter..." 
                    className="w-full bg-slate-900 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600"
                  />
                  
                  {/* Separate Counter to test isolation of renders */}
                  <div className="mt-6 pt-6 border-t border-slate-900 flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Isolated State</span>
                      <span className="text-xs text-slate-500">Forces re-renders</span>
                    </div>
                    <button 
                      onClick={() => {
                        setCount(c => c + 1);
                        addLog(`Unrelated Counter incremented: ${count + 1}`, 'compiler');
                      }}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
                    >
                      <MousePointerClick className="w-3.5 h-3.5" />
                      Count: {count}
                    </button>
                  </div>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Filtered Results ({filteredItems.length})</span>
                    <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                      {filteredItems.map(item => (
                        <div key={item.name} className="flex flex-col p-2 bg-slate-900/50 border border-slate-800 rounded-lg">
                          <span className="text-xs font-bold text-slate-200">{item.name}</span>
                          <span className="text-[10px] text-slate-500 uppercase font-semibold">{item.category}</span>
                        </div>
                      ))}
                      {filteredItems.length === 0 && (
                        <div className="text-center py-6 text-xs text-slate-600">No matching features.</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Comparison Card */}
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 mt-2">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-slate-300">React Compiler vs. Standard React Code</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] font-mono">
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/40">
                  <div className="text-pink-400 mb-1.5 font-bold uppercase tracking-wider text-[9px]">Before (Manual Memoization)</div>
                  <pre className="text-slate-500 overflow-x-auto">
{`const filtered = useMemo(() => {
  return items.filter(i => 
    i.name.includes(query)
  );
}, [items, query]);

const handleAction = useCallback(() => {
  doSomething();
}, []);`}
                  </pre>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/40">
                  <div className="text-emerald-400 mb-1.5 font-bold uppercase tracking-wider text-[9px]">After (React Compiler)</div>
                  <pre className="text-slate-300 overflow-x-auto">
{`// Write standard JS. Compiler 
// generates the memoization nodes
// under the hood automatically!

const filtered = items.filter(i => 
  i.name.includes(query)
);

const handleAction = () => {
  doSomething();
};`}
                  </pre>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: React 19 Actions & Live Compiler Logs */}
          <div className="flex flex-col gap-8">
            
            {/* Section A: React 19 Transition / Form Actions */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className={`w-5 h-5 ${accentColor === 'purple' ? 'text-purple-400' : accentColor === 'cyan' ? 'text-cyan-400' : 'text-pink-400'}`} />
                  <h3 className="text-lg font-bold text-white">React 19 Form Actions</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  React 19 supports handling async operations in transitions natively, managing loading states (`isPending`) without manual status tracking.
                </p>

                <form onSubmit={handleAsyncSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Simulate Setting Update</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        defaultValue="production-v4-build"
                        disabled={isPending}
                        className="flex-1 bg-slate-950 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-xl px-4 py-2 text-sm text-slate-100 outline-none transition-all disabled:opacity-50"
                      />
                      <button 
                        type="submit" 
                        disabled={isPending}
                        className={`px-4 py-2 font-bold rounded-xl text-sm transition-all flex items-center gap-2 shadow-md cursor-pointer ${getAccentBtn()} disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {isPending ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Action Status</span>
                  <span className={`text-sm font-semibold transition-all ${isPending ? 'text-purple-400 animate-pulse' : 'text-emerald-400'}`}>
                    {actionMessage}
                  </span>
                </div>
                {isPending && (
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-xs font-semibold animate-pulse">
                    isPending Active
                  </div>
                )}
              </div>
            </div>

            {/* Section B: Live Compiler Optimizer Logs */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-amber-500" />
                    <h3 className="text-lg font-bold text-white">Live Event Inspector</h3>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Terminal Simulation</span>
                </div>
                
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs space-y-2 h-44 overflow-y-auto shadow-inner scrollbar-thin">
                  {logs.map((log) => (
                    <div key={log.id} className="flex items-start gap-2 border-b border-slate-900 pb-1">
                      <span className="text-slate-600">[{log.timestamp}]</span>
                      <span className={`font-semibold shrink-0 uppercase text-[9px] px-1 rounded ${
                        log.type === 'compiler' ? 'bg-purple-950 text-purple-300' :
                        log.type === 'action' ? 'bg-pink-950 text-pink-300' :
                        'bg-slate-800 text-slate-300'
                      }`}>{log.type}</span>
                      <span className="text-slate-300 leading-normal">{log.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </main>

        {/* Tech Badges & Reference Links */}
        <section className="bg-slate-900/30 border border-slate-800/60 rounded-3xl p-6 backdrop-blur-md mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-slate-400" />
            <h3 className="text-sm font-bold text-slate-300">Technical Highlights</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="font-bold text-white text-xs mb-1">React Compiler Integration</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Utilizes the new React Compiler through Vite with `@rolldown/plugin-babel` and `babel-plugin-react-compiler`. Builds automatically optimize components, loops, and callbacks.
              </p>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="font-bold text-white text-xs mb-1">Tailwind CSS v4 (CSS-first)</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Tailwind CSS v4 compiles directly within Vite using `@tailwindcss/vite` plugin. Configuration is entirely written in modern CSS, discarding traditional configuration files.
              </p>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="font-bold text-white text-xs mb-1">React 19 Transitions</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Natively manages client transitions and interactions. Supports the latest DOM element improvements, ref properties as standard props, and server action structures.
              </p>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-slate-600 pt-8 border-t border-slate-900">
          <p>© 2026 Sagar M S. Built with React Latest, Tailwind CSS v4, and React Compiler.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
