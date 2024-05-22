"use client";
import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import Button from "@/components/button";
import { validateEmail } from "@/utils/helpers";
export default function Form() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      return toast.error("Invalid email address");
    }
    toast.success("Subscribed successfully");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-3">
      <div className="flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 w-full rounded border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 focus:outline-indigo-600 md:w-[334px]"
        />
        <Button type="submit" className="hidden md:block">
          Subscribe
        </Button>
      </div>

      <span className="text-base font-normal leading-6 text-neutral-600">
        We only send you the best! No spam.
      </span>
      <Button
        type="submit"
        className="mt-1 inline-flex items-center justify-center md:hidden"
      >
        Subscribe
      </Button>
    </form>
  );
}
