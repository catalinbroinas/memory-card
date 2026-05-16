import { DIFFICULTY } from "../constants/gameConstants";
import { difficultyConfig } from "../config/difficultyConfig";

export const difficulties = [
  {
    id: DIFFICULTY.EASY,
    label: 'Easy',
    rounds: difficultyConfig.easy.rounds,
  },
  {
    id: DIFFICULTY.MEDIUM,
    label: 'Medium',
    rounds: difficultyConfig.medium.rounds,
  },
  {
    id: DIFFICULTY.HARD,
    label: 'Hard',
    rounds: difficultyConfig.hard.rounds,
  },
];
