
function GameResult({
  mode,
  difficulty,
  score,
  bestScore,
  isVictory,
  isNewRecord
}) {
  const result = {
    victory: {
      title: 'You won!',
      style: 'victory'
    },
    defeat: {
      title: 'Game over!',
      style: 'defeat'
    }
  }[isVictory ? 'victory' : 'defeat'];

  return (
    <div className="game-result">
      <h3 className={`game-result__title game-result__title--${result.style}`}>
        {result.title}
      </h3>

      <ul className="game-result__info">
        <li className="game-result__info-item">{mode}</li>
        <li className="game-result__info-item">{difficulty}</li>
      </ul>

      <ul className="game-result__scores">
        <li className="game-result__score">
          <span className="game-result__label">Your score</span>

          <strong className="game-result__value game-result__value--current">
            {score}
          </strong>
        </li>

        <li className="game-result__score">
          <span className="game-result__label">Best score</span>

          <strong className="game-result__value">{bestScore}</strong>

          {isNewRecord && (
            <span className="game-result__badge">New record!</span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default GameResult;
