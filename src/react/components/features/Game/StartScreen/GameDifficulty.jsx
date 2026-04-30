
function GameDifficulty() {
  return (
    <div className="game-difficulty">
      <h2 className="game-difficulty__title">
        Choose difficulty
      </h2>

      <div className="game-difficulty__list">
        <button className="game-difficulty__card">
          <h3 className="game-difficulty__card-title">Easy</h3>
          <p className="game-difficulty__card-desc">4 rounds</p>
        </button>

        <button className="game-difficulty__card">
          <h3 className="game-difficulty__card-title">Medium</h3>
          <p className="game-difficulty__card-desc">8 rounds</p>
        </button>

        <button className="game-difficulty__card">
          <h3 className="game-difficulty__card-title">Hard</h3>
          <p className="game-difficulty__card-desc">12 rounds</p>
        </button>
      </div>
    </div>
  );
}

export default GameDifficulty;
