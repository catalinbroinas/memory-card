import { API_POKEMON_URL } from "../constants/apiConstants";

export async function getPokemon(name) {
  const response = await fetch(`${API_POKEMON_URL}${name}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon: ${name}.`);
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    imageUrl: data.sprites.front_default
  };
}
