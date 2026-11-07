import { createRipple } from "../../../../../utils/ripple";

function GameModeCard({ mode, onSelect }) {
  const { label, description, imageUrl } = mode;

  return (
    <button
      className="card game-mode-card ripple"
      type="button"
      onClick={onSelect}
      onPointerDown={createRipple}
    >
      <img 
        src={imageUrl}
        alt=""
        className="card-img game-mode-card__image"
        width="640"
        height="480"
        decoding="async"
        fetchPriority="high"
      />

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
