import londonImg from "../../../../../assets/images/london.webp";

function MemoryCard() {
  return (
    <button className="card memory-card">
      <img src={londonImg} alt="London" className="card-img" />

      <div className="card-header">
        <h3 className="card-title">London</h3>
      </div>
    </button>
  );
}

export default MemoryCard;
