import { createRipple } from "../../../../utils/ripple";

function GameActions({ onReset, onReplay, onResetProgress }) {
  return (
    <div className="game-actions" role="group" aria-label="Game actions">
      <button
        className="btn-tertiary ripple"
        onClick={onResetProgress}
        onPointerDown={createRipple}
      >Reset progress</button>

      <button
        className="btn-primary-outline ripple"
        onClick={onReset}
        onPointerDown={createRipple}
      >Restart</button>

      <button
        className="btn-primary ripple"
        onClick={onReplay}
        onPointerDown={createRipple}
      >Play again</button>
    </div>
  );
}

export default GameActions;
