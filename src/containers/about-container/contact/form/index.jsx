"use client";
import React from "react";
import { FORM_DATA } from "../constant";
import { useForm } from "react-hook-form";
import Button from "@/components/button";
import { toast } from "react-toastify";
import clsx from "clsx";
export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Form submitted successfully");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col flex-wrap gap-6  rounded-lg border border-neutral-200 p-4 px-4  shadow-lg md:flex-row xl:max-w-[592px] xl:p-8"
    >
      {FORM_DATA.map((data) => (
        <div
          className={clsx(
            "flex w-full flex-col gap-1.5 ",
            { "w-full": data.name === "message" },
            { "md:w-[47.5%]": data.name !== "message" },
          )}
          key={data.id}
        >
          <label
            htmlFor={data.label}
            className="block text-sm font-medium text-gray-700"
          >
            {data.label}
          </label>
          {data.type === "textarea" ? (
            <textarea
              id={data.label}
              {...register(data.name, { required: true })}
              className="h-[108px] w-full resize-none rounded border border-neutral-200 bg-neutral-50   px-3.5 py-3 shadow-sm outline-indigo-500 focus:border-indigo-500  focus:ring-indigo-500 sm:text-sm"
              placeholder={data.placeholder}
            />
          ) : (
            <input
              type={data.type}
              id={data.label}
              {...register(data.name, { required: true })}
              className="h-10 w-full rounded border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 outline-indigo-700"
              placeholder={data.placeholder}
            />
          )}
          {errors[data.name] && (
            <span className=" text-xs text-red-500">
              {data.label} is required
            </span>
          )}
        </div>
      ))}

      <Button
        type="submit"
        className="mt-10 inline-flex h-11 w-full items-center justify-center"
      >
        Submit
      </Button>
    </form>
  );
}
