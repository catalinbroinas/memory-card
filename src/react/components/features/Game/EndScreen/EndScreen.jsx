// Data
import { difficulties } from "../../../../data/difficultyOptions";

// Components
import GameResult from "./GameResult";
import GameActions from "./GameActions";

function EndScreen({
  difficultyId,
  score,
  bestScore
}) {
  const difficultyLabel = difficulties.find((difficulty) => (
    difficulty.id === difficultyId
  ))?.label ?? null;

  return (
    <section className="end-screen">
      <h2 className="visually-hidden">Game results</h2>

      <GameResult
        difficulty={difficultyLabel}
        score={score}
        bestScore={bestScore}
      />
      <GameActions />
    </section>
  );
}

export default EndScreen;
