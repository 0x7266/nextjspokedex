import { useContext } from "react";
import { PokemonsContext } from "../context/PokemonsContext";

export function usePokemonsContext() {
  const context = useContext(PokemonsContext);
  console.log(context);

  if (!context) {
    throw Error(
      "usePokemonsContext must be used inside an PokemonsContextProvider"
    );
  }
  return context;
}
