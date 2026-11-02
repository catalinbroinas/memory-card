// Data
import { GAME_MODE } from "../../../../constants/gameConstants";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

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
            onClick={() => onSelectMode(GAME_MODE.CITIES)}
          >
            Cities
            <FontAwesomeIcon
              icon={faArrowRight}
              aria-hidden="true"
            />
          </button>
        </li>

        <li className="game-mode__action-item">
          <button
            className="btn-primary btn-lg"
            onClick={() => onSelectMode(GAME_MODE.POKEMON)}
          >
            Pokémon
            <FontAwesomeIcon
              icon={faArrowRight}
              aria-hidden="true"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default GameMode;
