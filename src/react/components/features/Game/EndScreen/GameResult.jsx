
function GameResult({ difficulty, score, bestScore, isVictory }) {
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
