import { createContext, useReducer } from "react";

export const PokemonsContext = createContext();

function pokemonsReducer(state, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        pokemons: action.payload,
      };
    default:
      return state;
  }
}

export function PokemonsContextProvider({ children }) {
  const [state, dispatch] = useReducer(pokemonsReducer, { pokemons: null });

  return (
    <PokemonsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PokemonsContext.Provider>
  );
}
