import React, { useState } from 'react';
import { GAMES } from './constants';
import { Game } from './types';
import HexagonCard from './components/HexagonCard';
import GameModal from './components/GameModal';
import GameList from './components/GameList';
import { Cpu, ShieldCheck } from 'lucide-react';

function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [hoveredGame, setHoveredGame] = useState<Game | null>(null);

  // Honeycomb Configuration (Pointy-Topped Hexagons)
  // Card Size: W=260px, H=300px
  // Uniform Gap: ~20px
  
  // Row 1 Y: 0
  // Row 1 X Spacing: W + Gap = 280px
  
  // Row 2 X Offset: (W + Gap) / 2 = 140px
  // Row 2 Y Offset: Calculated for 20px diagonal gap
  // Theoretical touch point Y = 0.75 * H = 225px
  // Gap shift dy = 17px (approx) -> Y = 242px
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-x-hidden font-sans text-slate-900">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-slate-50 z-0"></div>
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100/50 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto pt-12 pb-6 px-4">
        
        {/* Header */}
        <header className="text-center mb-10 max-w-3xl animate-in slide-in-from-top duration-700">
            <div className="inline-flex items-center justify-center px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm mb-4">
                <span className="flex h-2 w-2 relative mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ref-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ref-blue"></span>
                </span>
                <span className="text-xs font-bold text-ref-blue tracking-wide uppercase">Assistant Référent IA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Vitrine des <span className="text-transparent bg-clip-text bg-gradient-to-r from-ref-blue to-tech-blue">Jeux Sérieux</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
            Une collection interactive pour former, entraîner et acculturer les acteurs publics.
            Explorez ces modules immersifs conçus pour accompagner la transformation numérique.
            </p>
            <div className="flex justify-center gap-6 mt-6 text-sm text-slate-500 font-medium">
                <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-600" /> IA de Confiance</span>
                <span className="flex items-center"><Cpu className="w-4 h-4 mr-1.5 text-violet-600" /> Innovation Publique</span>
            </div>
        </header>

        {/* Hexagons Area - Honeycomb Layout */}
        <section className="relative w-full flex flex-col items-center justify-center min-h-[580px] mb-12">
            
            {/* Desktop Layout: Honeycomb (Nid d'abeilles) */}
            {/* Container: Width = 3*260 + 2*20 = 820px. Height = 300 + 242 = 542px */}
            <div className="hidden lg:block relative w-[820px] h-[542px]">
                
                {/* --- Row 1 (3 items) --- */}
                
                {/* 1. Top Left - Clinique (Emerald) */}
                <div className="absolute top-0 left-0 z-10">
                    <HexagonCard 
                        game={GAMES[1]} 
                        onClick={setSelectedGame} 
                        onHover={setHoveredGame}
                        isHovered={hoveredGame?.id === GAMES[1].id}
                    />
                </div>

                {/* 2. Top Center - Sentier (Blue) */}
                <div className="absolute top-0 left-[280px] z-10">
                    <HexagonCard 
                        game={GAMES[0]} 
                        onClick={setSelectedGame} 
                        onHover={setHoveredGame}
                        isHovered={hoveredGame?.id === GAMES[0].id}
                    />
                </div>

                {/* 3. Top Right - Agora (Amber) */}
                <div className="absolute top-0 left-[560px] z-10">
                     <HexagonCard 
                        game={GAMES[2]} 
                        onClick={setSelectedGame} 
                        onHover={setHoveredGame}
                        isHovered={hoveredGame?.id === GAMES[2].id}
                    />
                </div>

                {/* --- Row 2 (2 items, nested) --- */}
                {/* Y offset changed from 225 to 242 to create uniform gap */}
                
                {/* 4. Bottom Left - VNF (Cyan) */}
                <div className="absolute top-[242px] left-[140px] z-20">
                    <HexagonCard 
                        game={GAMES[3]} 
                        onClick={setSelectedGame} 
                        onHover={setHoveredGame}
                        isHovered={hoveredGame?.id === GAMES[3].id}
                    />
                </div>

                {/* 5. Bottom Right - Passeport (Violet) */}
                <div className="absolute top-[242px] left-[420px] z-20">
                     <HexagonCard 
                        game={GAMES[4]} 
                        onClick={setSelectedGame} 
                        onHover={setHoveredGame}
                        isHovered={hoveredGame?.id === GAMES[4].id}
                    />
                </div>
            </div>

            {/* Mobile/Tablet Layout: Flex Grid */}
            <div className="lg:hidden flex flex-wrap justify-center gap-4 w-full max-w-3xl">
                {GAMES.map((game) => (
                    <div key={game.id} className="transform transition-transform">
                        <HexagonCard 
                            game={game} 
                            onClick={setSelectedGame} 
                            onHover={setHoveredGame}
                            isHovered={hoveredGame?.id === game.id}
                        />
                    </div>
                ))}
            </div>

        </section>

        {/* Detailed List */}
        <section className="w-full animate-in slide-in-from-bottom duration-1000 delay-100">
            <div className="flex items-center mb-8 px-4">
                <div className="h-px flex-1 bg-slate-200"></div>
                <span className="px-4 text-sm font-semibold text-slate-400 uppercase tracking-widest">Le Catalogue Complet</span>
                <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            <GameList games={GAMES} activeGameId={hoveredGame?.id || null} />
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-400 text-sm pb-8">
            <p>© {new Date().getFullYear()} Assistant Référent IA - Secteur Public. Tous droits réservés.</p>
        </footer>

      </div>

      {/* Full Screen Overlay Modal */}
      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </div>
  );
}

export default App;