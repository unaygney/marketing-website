import Button from "@/components/button";
import React from "react";
import Star from "../../../public/star.svg";
import Link from "next/link";
export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col flex-wrap gap-10">
        <div className="  flex flex-wrap items-center gap-4">
          <Button>
            <p>Button CTA on</p>
            <Star />
          </Button>
          <Button size="large">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button size="extra-large">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button size="2xl-large">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="secondary">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button size="large" variant="secondary">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button variant="secondary" size="extra-large">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button variant="secondary" size="2xl-large">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
        </div>
        <div className=" flex flex-wrap items-center gap-4">
          <Button variant="tertiary">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button size="large" variant="tertiary">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button variant="tertiary" size="extra-large">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button variant="tertiary" size="2xl-large">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="link-md">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Link>
          <Link href="/" className="link-lg">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Link>
          <Link href="/" className="link-xl">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Link>
          <Link href="/" className="link-2xl">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button href="/" className="link-gray-md">
            <Star />
            <p>Button CTA</p>
            <Star />
          </button>
          <Link href="/" className="link-gray-lg">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Link>
          <Link href="/" className="link-gray-xl">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Link>
          <Link href="/" className="link-gray-2xl">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Link>
        </div>
        <div className=" flex flex-wrap items-center gap-4">
          <Button variant="destructive">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button size="large" variant="destructive">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button variant="destructive" size="extra-large">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button variant="destructive" size="2xl-large">
            <Star />
            <p>Button CTA</p>
            <Star />
          </Button>
          <Button variant="destructive" size="2xl-large">
            <Star />
          </Button>
        </div>
      </div>
    </div>
  );
}
