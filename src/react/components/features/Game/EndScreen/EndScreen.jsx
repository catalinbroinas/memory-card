import GameResult from "./GameResult";
import GameActions from "./GameActions";

function EndScreen() {
  return (
    <section className="end-screen">
      <h2 className="visually-hidden">Game results</h2>

      <GameResult />
      <GameActions />
    </section>
  );
}

export default EndScreen;
