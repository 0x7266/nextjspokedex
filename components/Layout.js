import Head from "next/head";
import { Children } from "react";
import Navbar from "./Navbar.js";

export default function Layout({ children }) {
  return (
    <div className="">
      <Head>
        <title>POKÉDEX</title>
      </Head>
      <Navbar />
      <main className="">{children}</main>
      {/* <Footer/> */}
    </div>
  );
}
