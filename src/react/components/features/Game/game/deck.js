// Data
import { difficultyConfig } from "../../../../config/difficultyConfig";
import { cards } from "../../../../data/cards";

// Helpers
import { shuffleArray } from "../../../../../js/utils/shuffleArray";
import { preloadImages } from "../../../../../js/utils/images";

export async function loadCitiesDeck(difficulty) {
  const { deckSize } = difficultyConfig[difficulty];
  const deck = shuffleArray(cards).slice(0, deckSize);
  const deckImages = deck.map((card) => card.imageUrl);

  await preloadImages(deckImages);

  return deck;
}
