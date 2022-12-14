import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

export default function Card({ pokemon }) {
  return (
    <Tilt glareEnable={true} glarePosition={"all"} glareMaxOpacity={"0.1"}>
      <Link href={`/pokemon/${pokemon.name}`}>
        <div className="card rounded-lg h-fit w-72">
          <div className="card-content text-gray-100 h-[300] bg-yellow-300 bg-opacity-30 border-4 border-red-400 rounded-lg flex flex-col items-center shadow">
            <div className="name-id flex justify-between w-full p-2 bg-red-400 rounded-t-sm">
              <div className="name text-2xl font-extrabold">
                {pokemon.name.toUpperCase()}
              </div>
              <div className="name self-center">#{pokemon.id}</div>
            </div>
            <div className="img w-11/12 my-3 rounded-md flex justify-center items-end bg-cover min-h-fit h-48">
              <Image
                unoptimized={true}
                src={pokemon.gif}
                alt={pokemon.name}
                width="0"
                height="0"
                className="w-20 pb-3"
              />
            </div>
            <div className="info grid grid-cols-3 cols items-center w-full">
              <div className="types flex px-3 gap-1 col-span-2">
                {pokemon.types.map((types, index) => (
                  <div
                    key={index}
                    className={`py-1 rounded-xl text-sm w-20 text-center ${
                      types.type.name === "fire"
                        ? "bg-red-600"
                        : "" || types.type.name === "grass"
                        ? "bg-green-600"
                        : "" || types.type.name === "water"
                        ? "bg-blue-600"
                        : "" || types.type.name === "poison"
                        ? "bg-violet-600"
                        : "" || types.type.name === "bug"
                        ? "bg-white text-green-600"
                        : "" || types.type.name === "flying"
                        ? "bg-slate-400"
                        : "" || types.type.name === "normal"
                        ? "bg-gray-700"
                        : "" || types.type.name === "ground"
                        ? "bg-amber-900"
                        : "" || types.type.name === "electric"
                        ? "bg-orange-600"
                        : "" || types.type.name === "fighting"
                        ? "bg-orange-800"
                        : "" || types.type.name === "psychic"
                        ? "bg-violet-800"
                        : "" || types.type.name === "ghost"
                        ? "bg-white text-slate-600"
                        : "" || types.type.name === "fairy"
                        ? "bg-purple-300"
                        : "" || types.type.name === "rock"
                        ? "bg-stone-500 text-amber-900"
                        : "" || types.type.name === "ice"
                        ? "bg-slate-300 text-slate-800"
                        : "" || types.type.name === "dragon"
                        ? "bg-rose-600"
                        : "" || types.type.name === "dark"
                        ? "bg-slate-800 text-slate-200"
                        : "" || types.type.name === "steel"
                        ? "bg-neutral-400 text-slate-700"
                        : ""
                    }`}
                  >
                    {types.type.name.toUpperCase()}
                  </div>
                ))}
              </div>
              <div className="height-weight px-3 py-1 flex flex-col text-center w-24 justify-self-end gap-1">
                <span className="bg-yellow-500 rounded-xl p-1 text-sm">
                  H: {pokemon.height}
                </span>
                <span className="bg-yellow-500 rounded-xl p-1 text-sm">
                  W: {pokemon.weight}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Tilt>
  );
}
