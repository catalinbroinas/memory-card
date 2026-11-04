// Data
import {
  DEFAULT_BEST_SCORE,
  KEY_BEST_SCORE
} from "../../../../constants/gameConstants";

// Helpers
import {
  isLocalStorageAvailable,
  getStorageItem,
  setStorageItem,
  removeStorageItem
} from "../../../../../js/utils/storage";

export function loadBestScore() {
  if (!isLocalStorageAvailable()) {
    return { ...DEFAULT_BEST_SCORE };
  }

  const savedScore = getStorageItem(KEY_BEST_SCORE);

  if (!savedScore) {
    return { ...DEFAULT_BEST_SCORE };
  }

  try {
    const parsedScore = JSON.parse(savedScore);

    const isValid = Object.keys(DEFAULT_BEST_SCORE).every((mode) => {
      return Object.keys(DEFAULT_BEST_SCORE[mode]).every((difficulty) => {
        return typeof parsedScore?.[mode]?.[difficulty] === 'number';
      });
    });

    if (!isValid) {
      removeStorageItem(KEY_BEST_SCORE);
      return structuredClone(DEFAULT_BEST_SCORE);
    }

    return parsedScore;
  } catch {
    return { ...DEFAULT_BEST_SCORE };
  }
}

export function saveBestScore(mode, difficulty, value) {
  if (!isLocalStorageAvailable()) return;

  const oldBestScore = loadBestScore();

  const newScore = {
    ...oldBestScore,
    [mode]: {
      ...oldBestScore[mode],
      [difficulty]: value
    }
  };

  setStorageItem(KEY_BEST_SCORE, JSON.stringify(newScore));
}
