
function GameModeCard({ mode, onSelect }) {
  const { label, description, imageUrl } = mode;

  return (
    <button
      className="card game-mode-card"
      type="button"
      onClick={onSelect}
    >
      <img src={imageUrl} alt="" className="card-img" />

      <span className="card-header game-mode-card__header">
        <span className="card-title game-mode-card__title">{label}</span>

        <span className="card-text game-mode-card__text">
          {description}
        </span>
      </span>
    </button>
  );
}

export default GameModeCard;
