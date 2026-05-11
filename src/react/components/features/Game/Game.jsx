import { useState } from "react";

// Date
import { GAME_STATUS } from "../../../constants/gameConstants";

// Components
import StartScreen from "./StartScreen/StartScreen";

function Game() {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.START);

  return (
    <section className="game">
      <h1 className="game__title">Memory Card</h1>

      {gameStatus === GAME_STATUS.START && (
        <StartScreen />
      )}
    </section>
  );
}

export default Game;
