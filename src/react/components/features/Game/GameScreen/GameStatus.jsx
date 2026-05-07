
function GameStatus() {
  return (
    <ul className="game-status">
      <li className="game-status__item">
        <span className="game-status__label">Score:</span>
        <strong className="game-status__value">3</strong>
      </li>

      <li className="game-status__item">
        <span className="game-status__label">Round:</span>
        <strong className="game-status__value">2 / 6</strong>
      </li>
    </ul>
  );
}

export default GameStatus;
