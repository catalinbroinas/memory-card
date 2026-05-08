import MemoryCard from "./MemoryCard";

function CardGrid() {
  return (
    <section className="card-grid">
      <h2 className="visually-hidden">Game cards</h2>

      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </section>
  );
}

export default CardGrid;
