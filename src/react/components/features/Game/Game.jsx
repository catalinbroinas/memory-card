import { useState } from "react";

// Date
import {
  GAME_STATUS,
  DIFFICULTY,
  DEFAULT_BEST_SCORE,
  KEY_BEST_SCORE
} from "../../../constants/gameConstants";
import { difficultyConfig } from "../../../config/difficultyConfig";
import { cards } from "../../../data/cards";

// Components
import StartScreen from "./StartScreen/StartScreen";
import GameScreen from "./GameScreen/GameScreen";
import EndScreen from "./EndScreen/EndScreen";

// Helpers
import { shuffleArray } from "../../../../js/utils/shuffleArray";
import { isValidCard, isDuplicate, isWin } from "./game/rules";
import { getVisibleCards } from "./game/selectors";
import {
  loadBestScore,
  saveBestScore
} from "./game/bestScore";

function Game() {
  // Game flow state
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.START);
  const [gameDifficulty, setGameDifficulty] = useState(null);

  // Score system state
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => loadBestScore());
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
    setScore(nextScore);

    return nextScore;
  };

  const updateBestScore = (finalScore) => {
    if (finalScore <= bestScore[gameDifficulty]) return;

    if (bestScore[gameDifficulty] > 0) {
      setIsNewRecord(true);
    }

    setBestScore((prev) => ({
      ...prev,
      [gameDifficulty]: finalScore
    }));

    saveBestScore(gameDifficulty, finalScore);
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
      updateBestScore(score);

      setGameStatus(GAME_STATUS.END);
      return;
    }

    const nextScore = updateProgress(cardId);

    if (isWin(nextScore, totalRounds)) {
      updateBestScore(nextScore);

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

  const resetBestScore = () => {
    if (!window.confirm("Reset best score?")) return;

    setBestScore((prev) => ({
      ...prev,
      [gameDifficulty]: 0
    }));
    setIsNewRecord(false);

    saveBestScore(gameDifficulty, 0);
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
          bestScore={bestScore[gameDifficulty]}
          isVictory={isVictory}
          isNewRecord={isNewRecord}
          onReset={handleGameReset}
          onReplay={handleGameReplay}
          onResetProgress={resetBestScore}
        />
      )}
    </section>
  );
}

export default Game;
