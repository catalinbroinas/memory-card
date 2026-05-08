
function GameResult() {
  return (
    <ul className="game-result">
      <li className="game-result__item">
        <span className="game-result__label">Difficulty:</span>
        <strong className="game-result__value">Medium</strong>
      </li>

      <li className="game-result__item">
        <span className="game-result__label">Your score:</span>
        <strong className="game-result__value">3</strong>
      </li>

      <li className="game-result__item">
        <span className="game-result__label">Best score:</span>
        <strong className="game-result__value">6</strong>
      </li>
    </ul>
  );
}

export default GameResult;
