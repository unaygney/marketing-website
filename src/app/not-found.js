import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="flex min-h-screen flex-1 flex-col justify-center gap-2 rounded-md  bg-not-found bg-cover bg-center bg-no-repeat md:px-4 xl:px-24">
      <h4 className="text-base font-semibold leading-6 text-indigo-700">
        Not found
      </h4>
      <h1 className="text-4xl font-semibold leading-10 text-neutral-900 xl:text-6xl">
        We cannot find the page
      </h1>
      <p className="mt-3 text-lg font-normal leading-7 ">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        className=" mt-8 inline-flex h-12 w-full items-center justify-center rounded bg-indigo-700 text-white md:w-[173px]"
        href="/"
      >
        Back to Home
      </Link>
    </main>
  );
}
