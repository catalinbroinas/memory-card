import { useState } from "react";

// Date
import { GAME_STATUS, DIFFICULTY } from "../../../constants/gameConstants";
import { difficulties } from "../../../data/difficultyOptions";
import { cards } from "../../../data/cards";

// Components
import StartScreen from "./StartScreen/StartScreen";
import GameScreen from "./GameScreen/GameScreen";

function Game() {
  // States
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.START);
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [gameStats, setGameStats] = useState({
    score: 0,
    currentRound: 1
  });
  const [cardDeck, setCardDeck] = useState([]);

  // Data
  const totalRounds = gameDifficulty
    ? difficulties.find((diff) => diff.id === gameDifficulty).rounds
    : null;

  const cardsPerRound = {
    [DIFFICULTY.EASY]: 3,
    [DIFFICULTY.MEDIUM]: 3,
    [DIFFICULTY.HARD]: 6
  };
  const cardDeckLength = {
    [DIFFICULTY.EASY]: 4,
    [DIFFICULTY.MEDIUM]: 10,
    [DIFFICULTY.HARD]: 14
  };
  const visibleCards = cardDeck.slice(0, cardsPerRound[gameDifficulty]);

  const handleGameStart = (difficultySelected) => {
    const isValidDifficulty = 
      Object.values(DIFFICULTY).includes(difficultySelected);

    if (!isValidDifficulty) return;

    setGameDifficulty(difficultySelected);

    setCardDeck(cards.slice(0, cardDeckLength[gameDifficulty]));

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
          score={gameStats.score}
          currentRound={gameStats.currentRound}
          totalRounds={totalRounds}
          cards={visibleCards}
        />
      )}
    </section>
  );
}

export default Game;
