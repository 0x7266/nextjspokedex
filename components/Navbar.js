import Image from "next/image.js";
import Link from "next/link";

import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="bg-red-400 bg-opacity-75 flex items-center justify-center gap-5 p-5">
        <Link href="/">
          <Image
            src={logo}
            width="0"
            height="0"
            alt="pokemon-logo"
            className="w-60"
          />
        </Link>
      </nav>
    </div>
  );
}
