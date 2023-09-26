import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./font.module.css";

import logo from "/public/logo.png";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[20px] mt-5">
      <div className="left relative w-[259px] h-[42px]  ">
        <Image src={logo} alt="logo" fill></Image>
      </div>
      <div className="right w-[50%] flex justify-between text-xl">
        <Link
          className={`text-[#282828]  font-semibold ${poppins.className}`}
          href="/"
        >
          HOME
        </Link>
        <Link
          className={`text-[#282828]  font-semibold ${poppins.className}`}
          href="/about"
        >
          ABOUT
        </Link>
        <Link
          className={`text-[#282828]  font-semibold ${poppins.className}`}
          href="/cars"
        >
          CARS
        </Link>
        <Link
          className={`text-[#282828]  font-semibold ${poppins.className}`}
          href="/team"
        >
          TEAM
        </Link>
        <Link
          className={`text-[#282828]  font-semibold ${poppins.className}`}
          href="/sponsers"
        >
          SPONSERS
        </Link>
        <Link
          className={`text-[#282828]  font-semibold ${poppins.className}`}
          href="/blog"
        >
          BLOG
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
