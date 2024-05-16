"use client";
import React from "react";
import Link from "next/link";
import Logo from "/public/logo.svg";
import HamburgerIcon from "/public/hamburger-icon.svg";
import CloseIcon from "/public/close-icon.svg";
import { LINKS } from "./constant";
import Button from "../button";
import clsx from "clsx";
export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="container relative mx-auto flex  h-[68px] items-center  justify-between px-4 py-[18px] md:px-8 xl:justify-start ">
      <Link href="/">
        <Logo />
      </Link>
      {/* Mobile Hamburger Button */}
      <button
        className="xl:hidden"
        onClick={() => setOpen(!open)}
        role="button"
      >
        <HamburgerIcon />
      </button>

      {/* Mobile Navbar */}
      <nav
        className={clsx(
          "absolute -top-4 bottom-0 left-0 right-0 h-screen w-0  bg-white px-4 pb-4 pt-8 opacity-0 transition-all duration-300 ease-in-out xl:hidden",
          { " w-[96%] opacity-100 ": open },
        )}
        role="navigation"
      >
        <div className="flex h-full w-full flex-col  ">
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>
            <button onClick={() => setOpen(false)} role="button">
              <CloseIcon />
            </button>
          </div>
          <div className=" mt-6 flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                className="link-gray-md truncate"
                href={link.path}
                key={link.id}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto  flex flex-col items-center gap-4 ">
            <Button
              className="inline-flex w-full items-center justify-center truncate"
              variant="secondary"
              size="large"
            >
              Learn more
            </Button>
            <Button
              variant="primary"
              size="large"
              className="inline-flex w-full items-center justify-center truncate"
            >
              See Pricing
            </Button>
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav
        role="navigation"
        className="ml-24 hidden items-center gap-8 xl:flex"
      >
        {LINKS.map((link) => (
          <Link className="link-gray-lg" href={link.path} key={link.id}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Buttons */}
      <div className="ml-auto hidden items-center gap-4 xl:flex ">
        <Button variant="secondary" size="large">
          Learn more
        </Button>
        <Button variant="primary" size="large">
          See Pricing
        </Button>
      </div>
    </header>
  );
}
