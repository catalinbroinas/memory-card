import { useState } from "react";

import StartScreen from "./StartScreen/StartScreen";

function Game() {
  const [gameStatus, setGameStatus] = useState('start');

  return (
    <section className="game">
      <h1 className="game__title">Memory Card</h1>

      {gameStatus === 'start' && (
        <StartScreen />
      )}
    </section>
  );
}

export default Game;
