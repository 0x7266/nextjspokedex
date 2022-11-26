import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Pokedex from "../components/Pokedex";
import SearchBar from "../components/SearchBar";
import { callAPI, getPokemons } from "./api/api";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  function onLeftClick() {
    if (page === 0) {
      return;
    }
    setPage(page - 1);
  }
  function onRightClick() {
    setPage(page + 1);
  }

  async function fetchPokemons() {
    try {
      let data;
      setLoading(true);
      if (query !== "") {
        data = await callAPI(250, 0);
      }
      if (query === "") {
        data = await callAPI(itemsPerPage, page * itemsPerPage);
      }
      const promises = data.results.map(async (pokemon) => {
        const response = await getPokemons(pokemon.url);
        return response;
      });
      const results = await Promise.all(promises);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
      setPokemons(results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page, query]);

  return (
    <>
      <div className="app h-full flex flex-col items-center gap-10 p-5">
        <SearchBar setQuery={setQuery} />
        {loading || query !== "" ? null : (
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={onLeftClick}
            onRightClick={onRightClick}
            query={query}
          />
        )}
        <Pokedex pokemons={pokemons} query={query} loading={loading} />
        {loading || query !== "" ? null : (
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={onLeftClick}
            onRightClick={onRightClick}
          />
        )}
      </div>
    </>
  );
}
