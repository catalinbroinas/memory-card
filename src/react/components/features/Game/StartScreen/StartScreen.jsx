import GameInfo from "./GameInfo";
import GameDifficulty from "./GameDifficulty";

function StartScreen() {
  return (
    <section className="start-screen">
      <GameInfo />
      <GameDifficulty />
    </section>
  );
}

export default StartScreen;
