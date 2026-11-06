
function GameModeCard({ mode, onSelect }) {
  const { label, description, imageUrl } = mode;

  return (
    <button
      className="card game-mode-card"
      type="button"
      onClick={onSelect}
    >
      <img src={imageUrl} alt={label} className="card-img" />

      <div className="card-header">
        <h3 className="card-title">{label}</h3>
      </div>

      <div className="card-body">
        <p className="card-text">
          {description}
        </p>
      </div>
    </button>
  );
}

export default GameModeCard;
