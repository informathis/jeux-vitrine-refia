import React from 'react';
import { Game } from '../types';
import { Clock, Target } from 'lucide-react';

interface GameListProps {
  games: Game[];
  activeGameId: string | null;
}

const GameList: React.FC<GameListProps> = ({ games, activeGameId }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 pb-12">
      {games.map((game) => (
        <div 
            key={game.id}
            className={`bg-white rounded-xl p-6 border transition-all duration-300 ${
                activeGameId === game.id 
                ? 'border-ref-blue ring-2 ring-ref-blue/20 shadow-lg scale-[1.02]' 
                : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
            }`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-lg leading-snug">{game.titleFull}</h3>
                </div>
                <div 
                    className="w-3 h-3 rounded-full flex-none ml-3 mt-1" 
                    style={{ backgroundColor: game.color }}
                />
            </div>
            
            <div className="flex items-center text-xs text-slate-500 mb-3 font-medium uppercase tracking-wide">
                <Clock className="w-3 h-3 mr-1" />
                {game.duration}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 flex items-start">
                <Target className="w-4 h-4 mr-2 text-ref-blue flex-none mt-0.5" />
                {game.objective}
            </p>
        </div>
      ))}
    </div>
  );
};

export default GameList;