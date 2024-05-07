import Link from "next/link";
import React from "react";
import Logo from "../../../public/logo.svg";
import HamburgerIcon from "../../../public/hamburger-icon.svg";
export default function Navbar() {
  return (
    <header className="flex justify-between items-center  px-4 md:px-8 h-[68px] mx-auto container py-[18px] ">
      <Link href="/">
        <Logo />
      </Link>
      <button role="button">
        <HamburgerIcon />
      </button>
    </header>
  );
}
