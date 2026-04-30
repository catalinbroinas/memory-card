import GameInfo from "./GameInfo";
import GameDifficulty from "./GameDifficulty";

function StartScreen() {
  return (
    <section className="start-screen">
      <h2 className="visually-hidden">Start screen</h2>

      <GameInfo />
      <GameDifficulty />
    </section>
  );
}

export default StartScreen;
