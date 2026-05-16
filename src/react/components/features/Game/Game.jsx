import { useState } from "react";

// Date
import { GAME_STATUS, DIFFICULTY } from "../../../constants/gameConstants";
import { difficultyConfig } from "../../../config/difficultyConfig";
import { cards } from "../../../data/cards";

// Components
import StartScreen from "./StartScreen/StartScreen";
import GameScreen from "./GameScreen/GameScreen";

function Game() {
  // States
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.START);
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [score, setScore] = useState(0);
  const [cardDeck, setCardDeck] = useState([]);

  // Data
  const currentRound = score + 1;
  const currentDifficulty = gameDifficulty
    ? difficultyConfig[gameDifficulty]
    : null;
  const totalRounds = currentDifficulty?.rounds ?? null;
  const visibleCards = cardDeck.slice(
    0,
    currentDifficulty?.cardsPerRound ?? 0
  );

  const handleGameStart = (difficultySelected) => {
    const isValidDifficulty = 
      Object.values(DIFFICULTY).includes(difficultySelected);

    if (!isValidDifficulty) return;

    setGameDifficulty(difficultySelected);

    const { deckSize } = difficultyConfig[difficultySelected];
    setCardDeck(cards.slice(0, deckSize));

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
          cards={visibleCards}
        />
      )}
    </section>
  );
}

export default Game;
