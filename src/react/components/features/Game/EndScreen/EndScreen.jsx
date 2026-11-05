// Data
import { difficulties } from "../../../../data/difficultyOptions";

// Components
import GameResult from "./GameResult";
import GameActions from "./GameActions";

function EndScreen({
  mode,
  difficultyId,
  score,
  bestScore,
  isVictory,
  isNewRecord,
  onReset,
  onReplay,
  onResetProgress
}) {
  const difficultyLabel = difficulties.find((difficulty) => (
    difficulty.id === difficultyId
  ))?.label ?? null;

  const modeLabel = `${mode.charAt(0).toUpperCase()}${mode.slice(1)}`;

  return (
    <section className="end-screen">
      <h2 className="visually-hidden">Game results</h2>

      <GameResult
        mode={modeLabel}
        difficulty={difficultyLabel}
        score={score}
        bestScore={bestScore}
        isVictory={isVictory}
        isNewRecord={isNewRecord}
      />

      <GameActions
        onReset={onReset}
        onReplay={onReplay}
        onResetProgress={onResetProgress}
      />
    </section>
  );
}

export default EndScreen;
