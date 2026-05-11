import { difficulties } from "../../../../data/difficultyOptions";

function GameDifficulty() {
  return (
    <div className="game-difficulty">
      <h2 className="game-difficulty__title">
        Choose difficulty
      </h2>

      <div className="game-difficulty__list" role="group">
        {difficulties.map((option) => (
          <button 
            key={option.id}
            className="game-difficulty__card"
          >
            <h3 className="game-difficulty__card-title">
              {option.label}
            </h3>
            <p className="game-difficulty__card-desc">
              {option.rounds}{" "}rounds
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameDifficulty;
