import React from "react";
import { getCurrentYear } from "@/utils/helpers";
import { FOOTER_DATA, LOGOS } from "./constant";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex   w-full flex-col items-center gap-4  bg-white px-8 py-12">
      <nav className="flex items-center gap-4">
        {FOOTER_DATA.map(({ path, id, title }) => (
          <Link
            className="text-sm font-medium leading-5 text-neutral-600"
            key={id}
            href={path}
          >
            {title}
          </Link>
        ))}
      </nav>

      <ul className="flex gap-6">
        {LOGOS.map(({ id, src }) => (
          <li key={id}>
            <Image src={src} alt="logo" width={24} height={24} />
          </li>
        ))}
      </ul>

      <span className="text-sm font-normal leading-5 text-neutral-900">
        © {getCurrentYear()} Abstractly, Inc. All rights reserved.
      </span>
    </footer>
  );
}
