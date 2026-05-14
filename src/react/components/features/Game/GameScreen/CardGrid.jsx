import MemoryCard from "./MemoryCard";

function CardGrid({ cards, onSelect }) {
  return (
    <section className="card-grid">
      <h2 className="visually-hidden">Game cards</h2>

      {cards.map((card) => (
        <MemoryCard
          key={card.id}
          name={card.name}
          imageUrl={card.imageUrl}
          onSelect={() => onSelect(card.id)}
        />
      ))}
    </section>
  );
}

export default CardGrid;
