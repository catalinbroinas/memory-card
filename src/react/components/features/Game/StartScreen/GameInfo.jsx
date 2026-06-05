import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

function GameInfo({ onNext }) {
  return (
    <div className="game-info">
      <p className="game-info__desc">
        Every card can only be selected once. Challenge your memory and beat your best score.
      </p>

      <button
        className="btn-primary btn-lg"
        onClick={onNext}
      >
        Start Game
        <FontAwesomeIcon
          icon={faArrowRight}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

export default GameInfo;
