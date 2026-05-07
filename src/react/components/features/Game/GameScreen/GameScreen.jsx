import GameStatus from "./GameStatus";

function GameScreen() {
  return (
    <section className="game-screen">
      <h2 className="visually-hidden">Play game</h2>

      <GameStatus />
    </section>
  );
}

export default GameScreen;
