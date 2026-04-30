import GameInfo from "./GameInfo";

function StartScreen() {
  return (
    <section className="start-screen">
      <h2 className="visually-hidden">Gam`e setup</h2>

      <GameInfo />
    </section>
  );
}

export default StartScreen;
