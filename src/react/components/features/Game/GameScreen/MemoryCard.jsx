
function MemoryCard({ name, imageUrl, onSelect}) {
  return (
    <button 
      className="card memory-card"
      type="button"
      onClick={onSelect}
    >
      <img src={imageUrl} alt={name} className="card-img" />

      <div className="card-header memory-card__header">
        <h3 className="card-title memory-card__title">{name}</h3>
      </div>
    </button>
  );
}

export default MemoryCard;
