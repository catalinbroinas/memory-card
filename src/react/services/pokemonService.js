import { API_URL } from "../constants/apiConstants";

export async function getPokemon(name) {
  const response = await fetch(`${API_URL}${name}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon: ${name}.`);
  }

  const data = await response.json();

  return data;
}
