import GameResult from "./GameResult";

function EndScreen() {
  return (
    <section className="end-screen">
      <h2 className="visually-hidden">Game results</h2>

      <GameResult />
    </section>
  );
}

export default EndScreen;
