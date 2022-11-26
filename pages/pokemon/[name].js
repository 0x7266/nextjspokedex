import Image from "next/image";

export default function Pokemon({ pokemon }) {
  return (
    <div className="flex flex-col-reverse text-cyan-800 items-center sm:grid sm:grid-cols-2 sm:items-start">
      <div className="info">
        <div className="text-5xl uppercase">{pokemon.name}</div>
        <div className="text-5xl uppercase">#{pokemon.id}</div>
        <div className="text-5xl uppercase">Height: {pokemon.height}</div>
        <div className="text-5xl uppercase">Weight: {pokemon.weight}</div>
        <div className="abilities text-5xl uppercase">
          {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </div>
        <div className="types text-5xl uppercase">
          {pokemon.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </div>
      </div>
      <Image
        unoptimized={true}
        src={pokemon.image}
        alt={pokemon.name}
        width="0"
        height="0"
        className="w-72 pb-3"
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${context.query.name}`
    );
    const data = await response.json();
    const pokemon = {
      id: data.id,
      name: data.name,
      types: data.types.map((type) => type),
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map((ability) => ability.ability.name),
      gif: data.sprites.versions["generation-v"]["black-white"].animated[
        "front_default"
      ],
      image: data.sprites.other["official-artwork"].front_default,
    };
    return {
      props: {
        pokemon,
      },
    };
  } catch (error) {
    console.error("33434", error);
  }
}
