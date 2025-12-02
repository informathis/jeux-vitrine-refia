import React from 'react';
import { Game } from '../types';
import { X, ExternalLink, Info } from 'lucide-react';

interface GameModalProps {
  game: Game | null;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900 animate-in fade-in duration-300">
      {/* Header Bar */}
      <header className="flex-none h-16 bg-white border-b border-slate-200 shadow-sm flex items-center justify-between px-6 z-10">
        <div className="flex items-center space-x-4">
            <div 
                className="w-3 h-8 rounded-full"
                style={{ backgroundColor: game.color }}
            />
            <div>
                <h2 className="text-lg font-bold text-slate-800 leading-none">{game.titleFull}</h2>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Module de formation sérieux</p>
            </div>
        </div>
        
        <div className="flex items-center space-x-3">
            {/* External Link Fallback */}
            <a 
                href={game.url} 
                target="_blank" 
                rel="noreferrer"
                className="hidden sm:flex items-center px-4 py-2 text-sm font-medium text-slate-600 hover:text-ref-blue hover:bg-slate-50 rounded-md transition-colors"
                title="Ouvrir dans un nouvel onglet"
            >
                <ExternalLink className="w-4 h-4 mr-2" />
                Nouvel onglet
            </a>

            <button 
                onClick={onClose}
                className="flex items-center px-4 py-2 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 rounded-md transition-colors font-medium group"
            >
                <span className="mr-2 text-sm">Fermer</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>
        </div>
      </header>

      {/* Main Content - Iframe */}
      <main className="flex-grow relative bg-slate-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
             {/* Loader behind iframe */}
             <div className="absolute animate-pulse text-slate-400 flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-slate-300 border-t-ref-blue rounded-full animate-spin mb-4"></div>
                <p>Chargement du module...</p>
             </div>

            <iframe
                src={game.url}
                title={game.titleFull}
                className="relative z-10 w-full h-full border-0 shadow-inner"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
      </main>

      {/* Footer Info (Optional, visible on large screens) */}
      <footer className="flex-none bg-white py-2 px-6 border-t border-slate-200 text-xs text-slate-500 hidden md:flex justify-between items-center">
         <div className="flex items-center">
            <Info className="w-4 h-4 mr-2 text-ref-blue" />
            <span>Objectif : {game.objective}</span>
         </div>
         <span className="font-mono bg-slate-100 px-2 py-1 rounded">ID: {game.id}</span>
      </footer>
    </div>
  );
};

export default GameModal;