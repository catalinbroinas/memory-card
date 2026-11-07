// Data
import { GAME_MODE } from "../../../../../constants/gameConstants";

// Component
import GameModeCard from "./GameModeCard";

function GameMode({ onSelectMode }) {
  return (
    <div className="game-mode">
      <p className="game-mode__desc">
        Every card can only be selected once. Challenge your memory and beat your best score.
      </p>

      <ul className="game-mode__action">
        {Object.values(GAME_MODE).map((mode, index) => (
          <li key={mode.id} className="game-mode__action-item">
            <GameModeCard
              mode={mode}
              isPriority={index === 0}
              onSelect={() => onSelectMode(mode.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameMode;
