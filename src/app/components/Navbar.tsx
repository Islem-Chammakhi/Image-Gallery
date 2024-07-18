import Link from "next/link";
import React from 'react'
import Search from "./Search";

import {

  FaLinkedin,

} from "react-icons/fa";
export default function Navbar() {
  return (
    <header className="bg-black sticky top-0 z-10 rounded-md">
        <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
            <div>
            <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap"><Link href="/">Home Page</Link></h1>
            <h2 className="whitespace-nowrap text-green-300 flex items-center gap-1"><FaLinkedin/><Link href="https://www.linkedin.com/in/islem-chammakhi-2bb03b316/" 
            target="_blank" className=""
            > Chammakhi Islem</Link></h2>
            </div>
            <Search/>
        </nav>
    </header>
  )
}
