import { useState } from "react";

// Date
import { GAME_STATUS, DIFFICULTY } from "../../../constants/gameConstants";
import { difficulties } from "../../../data/difficultyOptions";

// Components
import StartScreen from "./StartScreen/StartScreen";
import GameScreen from "./GameScreen/GameScreen";

function Game() {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.START);
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [score, setScore] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const totalRounds = difficulties.find((diff) => diff.id === gameDifficulty).rounds;

  const handleGameStart = (difficultySelected) => {
    const isValidDifficulty = 
      Object.values(DIFFICULTY).includes(difficultySelected);

    if (!isValidDifficulty) return;

    setGameDifficulty(difficultySelected);
    setGameStatus(GAME_STATUS.PLAYING);
  };

  return (
    <section className="game">
      <h1 className="game__title">Memory Card</h1>

      {gameStatus === GAME_STATUS.START && (
        <StartScreen onStart={handleGameStart} />
      )}

      {gameStatus === GAME_STATUS.PLAYING && (
        <GameScreen
          score={score}
          currentRound={currentRound}
          totalRounds={totalRounds}
        />
      )}
    </section>
  );
}

export default Game;
