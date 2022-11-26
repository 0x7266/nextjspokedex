import Image from "next/image";
import Card from "./Card";

export default function Pokedex({ pokemons, query, loading }) {
  //console.log(pokemons);
  return loading ? (
    <Image
      unoptimized={true}
      src="https://i.gifer.com/VgI.gif"
      alt="loading"
      width="0"
      height="0"
      className="w-40"
    />
  ) : (
    <div className="pokedex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-bold gap-4">
      {pokemons
        .filter((i) => {
          return query === "" ? i : i.name.includes(query);
        })
        .map((item, index) => (
          <Card item={item} key={index} />
        ))}
    </div>
  );
}
