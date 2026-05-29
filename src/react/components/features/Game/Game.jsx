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
import {
  isLocalStorageAvailable,
  getStorageItem,
  setStorageItem
} from "../../../../js/utils/storage";
import { isValidCard, isDuplicate, isWin } from "./game/rules";
import { getVisibleCards } from "./game/selectors";

function Game() {
  // Game flow state
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.START);
  const [gameDifficulty, setGameDifficulty] = useState(null);

  // Score system state
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    if (!isLocalStorageAvailable()) return 0;
    
    const savedScore = getStorageItem("bestScore");

    return Number(savedScore) || 0;
  });
  const [isNewRecord, setIsNewRecord] = useState(false);

  // Game data state
  const [cardDeck, setCardDeck] = useState([]);
  const [selectedCardIds, setSelectedCardIds] = useState([]);

  // Game flow
  const currentRound = score + 1;
  const currentDifficultyConfig = gameDifficulty
    ? difficultyConfig[gameDifficulty]
    : null;
  const totalRounds = currentDifficultyConfig?.rounds ?? null;
  const isVictory = gameStatus === GAME_STATUS.END && score >= totalRounds;

  // Game data
  const visibleCards = getVisibleCards({
    deck: cardDeck,
    selectedIds: selectedCardIds,
    cardsPerRound: currentDifficultyConfig?.cardsPerRound ?? 0
  });

  // Update Game progress
  const updateProgress = (cardId) => {
    setSelectedCardIds((prev) => [...prev, cardId]);

    const nextScore = score + 1;
    const isNewBest = nextScore > bestScore;

    setScore(nextScore);

    if (isNewBest) {
      setBestScore(nextScore);
      setIsNewRecord(true);

      if (isLocalStorageAvailable()) {
        setStorageItem("bestScore", nextScore);
      }
    }

    return nextScore;
  };

  // Start screen handler
  const handleGameStart = (difficultySelected) => {
    const isValidDifficulty = 
      Object.values(DIFFICULTY).includes(difficultySelected);

    if (!isValidDifficulty) return;

    setGameDifficulty(difficultySelected);

    const { deckSize } = difficultyConfig[difficultySelected];
    setCardDeck(shuffleArray(cards).slice(0, deckSize));

    setGameStatus(GAME_STATUS.PLAYING);
  };

  // Game flow handler
  const handleSelectCard = (cardId) => {
    if (!isValidCard(cardDeck, cardId)) return;

    if (isDuplicate(selectedCardIds, cardId)) {
      setGameStatus(GAME_STATUS.END);
      return;
    }

    const progress = updateProgress(cardId);

    if (isWin(progress, totalRounds)) {
      setGameStatus(GAME_STATUS.END);
      return;
    }

    setCardDeck((prev) => shuffleArray(prev));
  };

  // Reset game
  const handleGameReset = () => {
    setGameDifficulty(null);
    setScore(0);
    setIsNewRecord(false);
    setCardDeck([]);
    setSelectedCardIds([]);
    setGameStatus(GAME_STATUS.START);
  };

  // Replay game
  const handleGameReplay = () => {
    setScore(0);
    setIsNewRecord(false);
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
          isVictory={isVictory}
          isNewRecord={isNewRecord}
          onReset={handleGameReset}
          onReplay={handleGameReplay}
        />
      )}
    </section>
  );
}

export default Game;
