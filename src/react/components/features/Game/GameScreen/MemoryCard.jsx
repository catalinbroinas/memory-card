import { createRipple } from "../../../../utils/ripple";

function MemoryCard({ name, imageUrl, onSelect}) {
  return (
    <button 
      className="card memory-card ripple"
      type="button"
      onClick={onSelect}
      onPointerDown={createRipple}
    >
      <img
        src={imageUrl}
        alt={name}
        className="card-img memory-card__image"
      />

      <span className="card-header memory-card__header">
        <span className="card-title memory-card__title">{name}</span>
      </span>
    </button>
  );
}

export default MemoryCard;
