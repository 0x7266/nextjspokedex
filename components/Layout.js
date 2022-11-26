import Head from "next/head";
import { Children } from "react";
import Navbar from "./Navbar.js";

export default function Layout({ children, title }) {
  return (
    <div className="app">
      <Head>
        <title>POKÉDEX - {title}</title>
      </Head>
      <Navbar />
      <main className="">{children}</main>
      {/* <Footer/> */}
    </div>
  );
}
