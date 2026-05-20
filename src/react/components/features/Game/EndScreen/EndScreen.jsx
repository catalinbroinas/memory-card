import GameResult from "./GameResult";
import GameActions from "./GameActions";

function EndScreen({
  difficulty,
  score,
  bestScore
}) {
  return (
    <section className="end-screen">
      <h2 className="visually-hidden">Game results</h2>

      <GameResult
        difficulty={difficulty}
        score={score}
      />
      <GameActions />
    </section>
  );
}

export default EndScreen;
