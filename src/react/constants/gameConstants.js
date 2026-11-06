import citiesImg from "../../assets/images/gameMode/cities.webp";
import pokemonImg from "../../assets/images/gameMode/pokemon.webp";

// Enums
export const GAME_MODE = {
  CITIES: {
    id: 'cities',
    label: 'Cities',
    description: 'Test your memory with cities.',
    imageUrl: citiesImg
  },
  POKEMON: {
    id: 'pokemon',
    label: 'Pokémon',
    description: 'Test your memory with Pokémon.',
    imageUrl: pokemonImg
  }
};

export const DIFFICULTY = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
};

export const DEFAULT_BEST_SCORE = {
  cities: {
    easy: 0,
    medium: 0,
    hard: 0
  },
  pokemon: {
    easy: 0,
    medium: 0,
    hard: 0
  },
};

export const KEY_BEST_SCORE = "bestScore";

// States
export const GAME_STATUS = {
  START: 'start',
  PLAYING: 'playing',
  END: 'end'
};

export const START_STEP = {
  MODE: 'mode',
  SETTINGS: 'settings',
};
