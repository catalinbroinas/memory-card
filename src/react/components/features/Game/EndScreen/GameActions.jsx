
function GameActions({ onReset, onReplay, onResetProgress }) {
  return (
    <div className="game-actions" role="group" aria-label="Game actions">
      <button
        className="btn-tertiary"
        onClick={onResetProgress}
      >Reset progress</button>

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
