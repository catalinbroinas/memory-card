// Data
import { GAME_MODE } from "../../../../constants/gameConstants";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

function GameMode({ onSelectMode }) {
  return (
    <div className="game-mode">
      <p className="game-mode__desc">
        Every card can only be selected once. Challenge your memory and beat your best score.
      </p>

      <ul className="game-mode__action">
        <li className="game-mode__action-item">
          <button
            className="btn-primary btn-lg"
            onClick={() => onSelectMode(GAME_MODE.CITIES.id)}
          >
            Play {GAME_MODE.CITIES.label}
            <FontAwesomeIcon
              icon={faPlay}
              aria-hidden="true"
            />
          </button>
        </li>

        <li className="game-mode__action-item">
          <button
            className="btn-primary btn-lg"
            onClick={() => onSelectMode(GAME_MODE.POKEMON.id)}
          >
            Play {GAME_MODE.POKEMON.label}
            <FontAwesomeIcon
              icon={faPlay}
              aria-hidden="true"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default GameMode;
