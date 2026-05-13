import GameStatus from "./GameStatus";

function GameScreen({ score, currentRound, totalRounds }) {
  return (
    <section className="game-screen">
      <h2 className="visually-hidden">Play game</h2>

      <GameStatus
        score={score}
        currentRound={currentRound}
        totalRounds={totalRounds}
      />
    </section>
  );
}

export default GameScreen;
