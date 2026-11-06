import { useState } from "react";

// Date
import {
  GAME_STATUS,
  GAME_MODE
} from "../../../constants/gameConstants";
import { difficultyConfig } from "../../../config/difficultyConfig";

// Components
import StartScreen from "./StartScreen/StartScreen";
import GameScreen from "./GameScreen/GameScreen";
import EndScreen from "./EndScreen/EndScreen";

// Helpers
import { shuffleArray } from "../../../../js/utils/shuffleArray";
import {
  isValidGameConfig,
  getGameModeLabel,
  isValidCard,
  isDuplicate,
  isWin
} from "./game/rules";
import { loadCitiesDeck, loadPokemonDeck } from "./game/deck";
import { getVisibleCards } from "./game/selectors";
import {
  loadBestScore,
  saveBestScore
} from "./game/bestScore";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons/faClone";

// Game loading time
const MIN_LOADING_TIME = 800;

function Game() {
  // Game flow state
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.START);
  const [gameMode, setGameMode] = useState(null);
  const [gameDifficulty, setGameDifficulty] = useState(null);

  // Game status
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    if (finalScore <= bestScore[gameMode][gameDifficulty]) return;

    if (bestScore[gameMode][gameDifficulty] > 0) {
      setIsNewRecord(true);
    }

    setBestScore((prev) => ({
      ...prev,
      [gameMode]: {
        ...prev[gameMode],
        [gameDifficulty]: finalScore
      }
    }));

    saveBestScore(gameMode, gameDifficulty, finalScore);
  };

  const loadGame = async (mode, difficulty) => {
    setIsLoading(true);
    setError(null);

    const startTime = Date.now();

    try {
      const deck = mode === GAME_MODE.CITIES.id
        ? await loadCitiesDeck(difficulty)
        : await loadPokemonDeck(difficulty);

      setCardDeck(deck);
      setGameStatus(GAME_STATUS.PLAYING);
    } catch (error) {
      console.error('Failed to load game:', error);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = MIN_LOADING_TIME - elapsedTime;

      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }

      setError('Unable to load the game. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Start screen handler
  const handleGameStart = ({ mode, difficulty }) => {
    if (!isValidGameConfig(mode, difficulty)) return;

    setGameMode(mode);
    setGameDifficulty(difficulty);

    loadGame(mode, difficulty);
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
    setGameMode(null);
    setGameDifficulty(null);
    setIsLoading(false);
    setError(null);
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

  // Retry game
  const handleRetry = () => {
    loadGame(gameMode, gameDifficulty);
  };

  const handleResetBestScore = () => {
    if (!window.confirm("Reset best score?")) return;

    setBestScore((prev) => ({
      ...prev,
      [gameMode]: {
        ...prev[gameMode],
        [gameDifficulty]: 0
      }
    }));
    setIsNewRecord(false);

    saveBestScore(gameMode, gameDifficulty, 0);
  };

  return (
    <section className="game">
      <h1 className="game__title">
        <FontAwesomeIcon
          icon={faClone}
          className="game__title-icon"
          aria-hidden="true"
        />

        <span className="game__title-text">Memory Card</span>
      </h1>

      {gameStatus === GAME_STATUS.START && (
        <StartScreen
          loading={isLoading}
          error={error}
          onStart={handleGameStart}
          onRetry={handleRetry}
          onReset={handleGameReset}
        />
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
          mode={getGameModeLabel(gameMode)}
          difficultyId={gameDifficulty}
          score={score}
          bestScore={bestScore[gameMode][gameDifficulty]}
          isVictory={isVictory}
          isNewRecord={isNewRecord}
          onReset={handleGameReset}
          onReplay={handleGameReplay}
          onResetProgress={handleResetBestScore}
        />
      )}
    </section>
  );
}

export default Game;
