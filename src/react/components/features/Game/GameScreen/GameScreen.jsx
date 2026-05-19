import GameStatus from "./GameStatus";
import CardGrid from "./CardGrid";

function GameScreen({
  score,
  currentRound,
  totalRounds,
  cards,
  onSelectCard
}) {
  return (
    <section className="game-screen">
      <h2 className="visually-hidden">Play game</h2>

      <GameStatus
        score={score}
        currentRound={currentRound}
        totalRounds={totalRounds}
      />

      <CardGrid
        cards={cards}
        onSelect={onSelectCard}
      />
    </section>
  );
}

export default GameScreen;
