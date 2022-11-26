import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Pokedex from "../components/Pokedex";
import SearchBar from "../components/SearchBar";

export default function Home({ pokemons }) {
  const [allPokemons, setAllPokemons] = useState(pokemons);
  const [query, setQuery] = useState();

  async function handleSearch() {
    if (!query) {
      setAllPokemons(pokemons);
    }
    if (query) {
      const search = allPokemons.filter((i) => {
        return query === "" ? i : i.name.includes(query);
      });
      setAllPokemons(search);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <div className="h-full flex flex-col items-center gap-10 p-5">
      <SearchBar setQuery={setQuery} />
      <div className="pokedex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-bold gap-4">
        {allPokemons.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=251");
    const { results, prev, next } = await response.json();
    const promises = results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      return response.json();
    });
    const data = await Promise.all(promises);
    let pokemons = [];
    for (const item of data) {
      const pokemon = {
        id: item.id,
        name: item.name,
        types: item.types.map((type) => type),
        height: item.height,
        weight: item.weight,
        abilities: item.abilities.map((ability) => ability.ability.name),
        gif: item.sprites.versions["generation-v"]["black-white"].animated[
          "front_default"
        ],
        image: item.sprites.other["official-artwork"].front_default,
      };
      pokemons.push(pokemon);
    }

    return {
      props: { pokemons },
    };
  } catch (error) {
    console.error(error);
  }
}
