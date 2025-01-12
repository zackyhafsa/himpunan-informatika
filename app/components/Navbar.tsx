"use client";

import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="shadow-md fixed top-0 left-0 right-0 bg-white z-[2]">
      <div className="px-[5%] py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="" className="w-12 max-md:w-10" />
          <h1 className="font-bold leading-5 uppercase text-sm max-md:text-xs">
            Himpunan Mahasiswa Informatika
            <br />
            Universitas Majalengka
          </h1>
        </div>
        <div className="p-2 hover:bg-gray-300 transition-all duration-300 rounded-full ease-in-out active:bg-gray-500">
          <RiMenu3Fill className="flex text-2xl md:hidden" onClick={handleMenu} />
        </div>
        <div className={`flex gap-5 max-md:hidden`}>
          <div className="group relative">
            <Link href="/">Beranda</Link>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[3px] bg-red-700 group-hover:w-1/2 ease-in-out duration-300"></span>
            {pathname === "/" ? (
              <span className="absolute -bottom-1 left-0 transition-all h-[3px] bg-red-700 w-1/2 ease-in-out duration-300"></span>
            ) : (
              ""
            )}
          </div>
          <div className="group relative">
            <Link href="/struktural">Struktural</Link>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[3px] bg-red-700 group-hover:w-1/2 ease-in-out duration-300"></span>
            {pathname === "/struktural" ? (
              <span className="absolute -bottom-1 left-0 transition-all h-[3px] bg-red-700 w-1/2 ease-in-out duration-300"></span>
            ) : (
              ""
            )}
          </div>
          <div className="group relative">
            <Link href="/tentang">Tentang</Link>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[3px] bg-red-700 group-hover:w-1/2 ease-in-out duration-300"></span>
            {pathname === "/tentang" ? (
              <span className="absolute -bottom-1 left-0 transition-all h-[3px] bg-red-700 w-1/2 ease-in-out duration-300"></span>
            ) : (
              ""
            )}
          </div>
          <div className="group relative">
            <Link href="/saran">Saran</Link>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[3px] bg-red-700 group-hover:w-1/2 ease-in-out duration-300"></span>
            {pathname === "/saran" ? (
              <span className="absolute -bottom-1 left-0 transition-all h-[3px] bg-red-700 w-1/2 ease-in-out duration-300"></span>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* responsive */}

        <div
          className={` absolute right-5 top-16 bg-white py-2 px-10 shadow-md border flex-col gap-5 ${
            isOpen ? "max-md:flex hidden" : "hidden"
          }`}
        >
          <div className="group relative">
            <Link href="/" onClick={closeNavbar}>
              Beranda
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[3px] bg-red-700 group-hover:w-1/2 ease-in-out duration-300"></span>
            {pathname === "/" ? (
              <span className="absolute -bottom-1 left-0 transition-all h-[3px] bg-red-700 w-1/2 ease-in-out duration-300"></span>
            ) : (
              ""
            )}
          </div>
          <div className="group relative">
            <Link href="/struktural" onClick={closeNavbar}>
              Struktural
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[3px] bg-red-700 group-hover:w-1/2 ease-in-out duration-300"></span>
            {pathname === "/struktural" ? (
              <span className="absolute -bottom-1 left-0 transition-all h-[3px] bg-red-700 w-1/2 ease-in-out duration-300"></span>
            ) : (
              ""
            )}
          </div>
          <div className="group relative">
            <Link href="/tentang" onClick={closeNavbar}>
              Tentang
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[3px] bg-red-700 group-hover:w-1/2 ease-in-out duration-300"></span>
            {pathname === "/tentang" ? (
              <span className="absolute -bottom-1 left-0 transition-all h-[3px] bg-red-700 w-1/2 ease-in-out duration-300"></span>
            ) : (
              ""
            )}
          </div>
          <div className="group relative">
            <Link href="/saran" onClick={closeNavbar}>
              Saran
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[3px] bg-red-700 group-hover:w-1/2 ease-in-out duration-300"></span>
            {pathname === "/saran" ? (
              <span className="absolute -bottom-1 left-0 transition-all h-[3px] bg-red-700 w-1/2 ease-in-out duration-300"></span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
