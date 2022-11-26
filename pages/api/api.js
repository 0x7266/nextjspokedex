export async function callAPI(itemsPerPage, offset) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
  );
  return await response.json();
}

export async function getPokemons(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function searchPokemon(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}
