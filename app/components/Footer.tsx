"use client";

import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-red-700 py-10">
      <div>
        <img src="logo.png" alt="" className="mx-auto mb-2 w-20" />
        <h1 className="text-center font-bold text-white">Himpunan Mahasiswa Informatika</h1>
        <div className="flex gap-5 text-white text-lg justify-center mt-10 ">
          <Link href={"#"}>Beranda</Link>
          <Link href={"#"}>Struktural</Link>
          <Link href={"#"}>Tentang</Link>
          <Link href={"#"}>Saran</Link>
        </div>
        <hr className="mx-60 my-5 max-md:mx-[5%]" />
        <div className="flex text-white  gap-5 justify-center">
          <Link href={"https://www.instagram.com/hmifunma/"}>
            <FaInstagram className="text-3xl" />
          </Link>
          <Link href={"https://www.facebook.com/hmif.unma"}>
            <FaFacebookF className="text-3xl" />
          </Link>
          <Link href={"https://www.youtube.com/@hmifunma"}>
            <FaYoutube className="text-3xl" />
          </Link>
        </div>
        <h1 className="text-white text-center mt-5">©hmif 2025, All Right Reserved</h1>
      </div>
    </footer>
  );
};

export default Footer;
