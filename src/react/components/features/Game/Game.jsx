import { useState } from "react";

// Date
import { GAME_STATUS, DIFFICULTY } from "../../../constants/gameConstants";
import { difficultyConfig } from "../../../config/difficultyConfig";
import { cards } from "../../../data/cards";

// Components
import StartScreen from "./StartScreen/StartScreen";
import GameScreen from "./GameScreen/GameScreen";
import EndScreen from "./EndScreen/EndScreen";

// Helpers
import { shuffleArray } from "../../../../js/utils/shuffleArray";

function Game() {
  // States
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.START);
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardDeck, setCardDeck] = useState([]);
  const [selectedCardIds, setSelectedCardIds] = useState([]);

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
    setCardDeck(shuffleArray(cards.slice(0, deckSize)));

    setGameStatus(GAME_STATUS.PLAYING);
  };

  const handleSelectCard = (cardID) => {
    const isValidCard = cardDeck.find((card) => card.id === cardID);
    if (!isValidCard) return;

    const isSelectedCard = selectedCardIds.includes(cardID);
    if (isSelectedCard) {
      setGameStatus(GAME_STATUS.END);
      return;
    }

    setSelectedCardIds((prev) => [
      ...prev,
      cardID
    ]);

    const nextScore = score + 1;
    setScore(nextScore);

    if (nextScore > bestScore) {
      setBestScore(nextScore);
    }

    if (nextScore >= totalRounds) {
      setGameStatus(GAME_STATUS.END);
      return;
    }

    setCardDeck((prev) => shuffleArray(prev))
  };

  const handleGameReset = () => {
    setGameDifficulty(null);
    setScore(0);
    setCardDeck([]);
    setSelectedCardIds([]);
    setGameStatus(GAME_STATUS.START);
  };

  const handleGameReplay = () => {
    setScore(0);
    setSelectedCardIds([]);
    setCardDeck((prev) => shuffleArray(prev));
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
          onSelectCard={handleSelectCard}
        />
      )}

      {gameStatus === GAME_STATUS.END && (
        <EndScreen
          difficultyId={gameDifficulty}
          score={score}
          bestScore={bestScore}
          onReset={handleGameReset}
          onReplay={handleGameReplay}
        />
      )}
    </section>
  );
}

export default Game;
