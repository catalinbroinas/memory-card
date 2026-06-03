// Data
import {
  DEFAULT_BEST_SCORE,
  KEY_BEST_SCORE
} from "../../../../constants/gameConstants";

// Helpers
import {
  isLocalStorageAvailable,
  getStorageItem,
  setStorageItem
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
    return {
      ...DEFAULT_BEST_SCORE,
      ...JSON.parse(savedScore)
    };
  } catch {
    return { ...DEFAULT_BEST_SCORE };
  }
}

export function saveBestScore(difficulty, value) {
  if (!isLocalStorageAvailable()) return;

  const oldBestScore = loadBestScore();

  const newScore = {
    ...oldBestScore,
    [difficulty]: value
  };

  setStorageItem(KEY_BEST_SCORE, JSON.stringify(newScore));
}
