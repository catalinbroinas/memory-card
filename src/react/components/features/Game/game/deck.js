// Data
import { difficultyConfig } from "../../../../config/difficultyConfig";
import { cards } from "../../../../data/cards";

// API
import { getPokemonList, getPokemon } from "../../../../services/pokemonService";

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

export async function loadPokemonDeck(difficulty) {
  const { deckSize } = difficultyConfig[difficulty];

  const pokemonList = await getPokemonList();
  const selectedPokemon = shuffleArray(pokemonList).slice(0, deckSize);

  const deck = await Promise.all(
    selectedPokemon.map((pokemon) => getPokemon(pokemon.name))
  );

  const deckImages = deck.map((pokemon) => pokemon.imageUrl);

  await preloadImages(deckImages);

  return deck;
};
