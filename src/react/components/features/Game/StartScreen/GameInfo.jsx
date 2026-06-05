import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

function GameInfo({ onNext }) {
  return (
    <div className="game-info">
      <p className="game-info__desc">
        Test your memory by selecting unique cards.
        Avoid clicking the same card twice and try to beat your high score.
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
