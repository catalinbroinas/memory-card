import {
  API_POKEMON_URL,
  POKEMON_LIMIT
} from "../constants/apiConstants";

const pokemonListCache = new Map();
const pokemonDetailsCache = new Map();

export async function getPokemon(name) {
  if (pokemonDetailsCache.has(name)) {
    return pokemonDetailsCache.get(name);
  }

  const response = await fetch(`${API_POKEMON_URL}${name}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon: ${name}.`);
  }

  const data = await response.json();

  const pokemon = {
    id: data.id,
    name: data.name,
    imageUrl: data.sprites.other['official-artwork'].front_default
  };

  pokemonDetailsCache.set(name, pokemon);

  return pokemon;
}

export async function getPokemonList(limit = POKEMON_LIMIT) {
  if (pokemonListCache.has(limit)) {
    return pokemonListCache.get(limit);
  }

  const response = await fetch(`${API_POKEMON_URL}?limit=${limit}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon list with ${limit} limit.`);
  }

  const data = await response.json();

  pokemonListCache.set(limit, data.results);

  return data.results;
}
