
function GameActions({ onReset, onReplay }) {
  return (
    <div className="game-actions" role="group" aria-label="Game actions">
      <button
        className="btn-primary-outline"
        onClick={onReset}
      >Restart</button>

      <button
        className="btn-primary"
        onClick={onReplay}
      >Play again</button>
    </div>
  );
}

export default GameActions;
