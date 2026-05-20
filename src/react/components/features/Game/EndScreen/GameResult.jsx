
function GameResult({ difficulty, score, bestScore }) {
  return (
    <ul className="game-result">
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
  );
}

export default GameResult;
