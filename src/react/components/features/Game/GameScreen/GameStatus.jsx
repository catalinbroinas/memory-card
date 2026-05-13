
function GameStatus({ score, currentRound, totalRounds }) {
  return (
    <ul className="game-status">
      <li className="game-status__item">
        <span className="game-status__label">Score:</span>
        <strong className="game-status__value">{score}</strong>
      </li>

      <li className="game-status__item">
        <span className="game-status__label">Round:</span>
        <strong className="game-status__value">
          {`${currentRound} / ${totalRounds}`}
        </strong>
      </li>
    </ul>
  );
}

export default GameStatus;
