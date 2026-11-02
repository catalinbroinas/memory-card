import {
  GAME_MODE,
  DIFFICULTY
} from "../../../../constants/gameConstants";

export function isValidGameConfig(mode, difficulty) {
  const isValidMode = Object.values(GAME_MODE).includes(mode);
  const isValidDifficulty = Object.values(DIFFICULTY).includes(difficulty);

  return isValidMode && isValidDifficulty;
}

export function isValidCard(deck, cardId) {
  return deck.some((card) => card.id === cardId);
}

export function isDuplicate(selectedIds, cardId) {
  return selectedIds.includes(cardId);
}

export function isWin(score, rounds) {
  return score >= rounds;
}
