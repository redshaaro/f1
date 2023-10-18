"use client"
import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
    const [show, setShow] = useState(true);
  return (
     <nav
      className='bg-gray-100 p-4 lg:p-10 flex justify-between text-base xl:text-2xl items-center relative '>
        <Link href={"/"}>
           <img className='md:mr-10 w-[150px]  md:w-[230px] lg:w-[300px]' src="./logo.png" alt="" />
           </Link>
           <img src="./Hamburger_icon.svg.png" className={`w-[40px] lg:hidden ${show ? "block":"hidden"}`} onClick={()=>setShow(!show)} alt="" />
           <img src="./close.svg" className={`w-[40px] lg:hidden  ${show ? "hidden":"block"}`} onClick={()=>setShow(!show)} alt="" />
           <ul className='hidden lg:flex gap-20 font-semibold '>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
            <Link href="/cars">Cars</Link>
            </li>
            <li>
            <Link href="/team">Team</Link>
            </li>
            <li>
             <Link href="/sponsors">Sponsors</Link>
             
            </li>
            <li>
            <Link href="/blog">Blog</Link>
            </li>
        </ul>
        <ul className={`lg:hidden transition-all  ease-in-out duration-300 bg-white p-4 font-semibold absolute top-20 right-3 z-[1] rounded-lg ${show ? "opacity-0" :"opacity-100 translate-y-5"} `}>
            <li>
                <Link href="/home">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
            <Link href="/cars">Cars</Link>
            </li>
            <li>
            <Link href="/team">Team</Link>
            </li>
            <li>
             <Link href="/sponsors">Sponsors</Link>
            </li>
            <li>
            <Link href="/blog">Blog</Link>
            </li>
        </ul>
        <ul className='hidden lg:flex gap-10 font-semibold mr-20' >
            <li>
                <img src="./ico-3.png" alt="" />
            </li>
            <li>
                <img src="./ico-2.png" alt="" />
            </li>
            <li>
                <img src="./ico-1.png" alt="" />
            </li>
        </ul>
        </nav>
  );
};

export default Navbar;
