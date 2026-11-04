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

  if (!Array.isArray(deck) || deck.length !== deckSize) {
    throw new Error('Invalid cities deck received from local data.');
  }

  const deckImages = deck.map((card) => card.imageUrl);

  await preloadImages(deckImages);

  return deck;
}

export async function loadPokemonDeck(difficulty) {
  const { deckSize } = difficultyConfig[difficulty];

  const pokemonList = await getPokemonList();

  if (!Array.isArray(pokemonList) || pokemonList.length < deckSize) {
    throw new Error('Invalid Pokémon list received from API.');
  }

  const selectedPokemon = shuffleArray(pokemonList).slice(0, deckSize);

  const deck = await Promise.all(
    selectedPokemon.map((pokemon) => getPokemon(pokemon.name))
  );

  if (deck.some((pokemon) => !pokemon.imageUrl)) {
    throw new Error('Some Pokémon are missing their images.');
  }

  const deckImages = deck.map((pokemon) => pokemon.imageUrl);

  await preloadImages(deckImages);

  return deck;
};
