
function MemoryCard({ name, imageUrl, onSelect}) {
  return (
    <button 
      className="card memory-card"
      type="button"
      onClick={onSelect}
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
