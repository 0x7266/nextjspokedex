import { useState } from "react";

export default function SearchBar({ setQuery }) {
  function onChangeHandler(e) {
    e.preventDefault();
    if (e.target.value === "") {
      setQuery(undefined);
    }
    setQuery(e.target.value);
  }

  return (
    <div>
      <form className="w-full flex place-content-center gap-3">
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="Search pokémon by name"
          className="border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-96 text-2xl text-center"
        />
        {/* <button className="bg-slate-600 rounded p-3 text-gray-100">
          Search
        </button> */}
      </form>
    </div>
  );
}
