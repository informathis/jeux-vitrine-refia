import React from 'react';
import { Game } from '../types';
import { Play } from 'lucide-react';

interface HexagonCardProps {
  game: Game;
  onClick: (game: Game) => void;
  onHover: (game: Game | null) => void;
  isHovered: boolean;
}

const HexagonCard: React.FC<HexagonCardProps> = ({ game, onClick, onHover, isHovered }) => {
  return (
    <div 
      className={`relative group cursor-pointer transition-all duration-500 ease-out ${isHovered ? 'scale-110 z-10' : 'scale-100 z-0'}`}
      style={{ 
        width: '260px', 
        height: '300px',
        filter: isHovered ? `drop-shadow(0 0 20px ${game.color}66)` : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
      }}
      onClick={() => onClick(game)}
      onMouseEnter={() => onHover(game)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Clip container */}
      <div className="absolute inset-0 clip-hexagon bg-white overflow-hidden transition-colors duration-300">
        
        {/* Iframe Preview (Scaled down to act as a thumbnail) */}
        <div className="absolute inset-0 w-[400%] h-[400%] origin-top-left scale-25 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-slate-100">
             {/* Using lazy loading to prevent heavy load on home page */}
            <iframe 
                src={game.url} 
                title={`Preview of ${game.titleShort}`}
                className="w-full h-full border-0"
                loading="lazy"
                tabIndex={-1}
            />
        </div>

        {/* Gradient Overlay */}
        <div 
            className="absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-70"
            style={{ background: `linear-gradient(to bottom, ${game.color}CC, ${game.color})` }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 mt-0">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
          </div>
          <h3 className="text-white font-bold text-xl uppercase tracking-wide drop-shadow-md px-2 leading-tight">
            {game.titleShort}
          </h3>
          <p className="text-white/90 text-xs mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            Cliquer pour jouer
          </p>
        </div>
      </div>
      
      {/* Decorative Border Ring */}
      <div 
        className="absolute inset-0 clip-hexagon border-[6px] border-transparent pointer-events-none"
        style={{ borderColor: isHovered ? 'white' : 'transparent' }}
      />
    </div>
  );
};

export default HexagonCard;