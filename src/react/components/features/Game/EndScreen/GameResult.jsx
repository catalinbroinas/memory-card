
function GameResult({ difficulty, score, bestScore }) {
  return (
    <div className="game-result">
      <h3 className="game-result__title">Win / Lose</h3>

      <ul className="game-result__list">
        <li className="game-result__item">
          <span className="game-result__label">Difficulty:</span>
          <strong className="game-result__value">{difficulty}</strong>
        </li>

        <li className="game-result__item">
          <span className="game-result__label">Your score:</span>
          <strong className="game-result__value">{score}</strong>
        </li>

        <li className="game-result__item">
          <span className="game-result__label">Best score:</span>
          <strong className="game-result__value">{bestScore}</strong>
        </li>
      </ul>
    </div>
  );
}

export default GameResult;
