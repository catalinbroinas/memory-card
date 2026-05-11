import { difficulties } from "../../../../data/difficultyOptions";

function GameDifficulty() {
  return (
    <div className="game-difficulty">
      <h2 className="game-difficulty__title">
        Choose difficulty
      </h2>

      <div className="game-difficulty__list">
        {difficulties.map((option) => (
          <button
            key={option.id}
            className="game-difficulty__card"
            type="button"
          >
            <span className="game-difficulty__card-title">
              {option.label}
            </span>

            <span className="game-difficulty__card-desc">
              {option.rounds}{" "}rounds
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameDifficulty;
