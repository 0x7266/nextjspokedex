import Layout from "../components/Layout";
import { PokemonsContextProvider } from "../context/PokemonsContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PokemonsContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PokemonsContextProvider>
  );
}

export default MyApp;
