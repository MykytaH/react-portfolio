import { FaArrowUp, FaGithub } from "react-icons/fa";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-x-0 -top-3 flex justify-center sm:-top-5">
        <a
          className="rounded-full text-neutral-400 bg-neutral-900 p-1 ring-neutral-500 ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 hover:ring-2 hover:outline-none sm:p-2"
          href="#summary"
        >
          <FaArrowUp className="h-6 w-6 " />
        </a>
      </div>
      <div className="bg-neutral-900/50 w-full h-14  px-8 flex justify-between items-center">
        <a
          aria-label="Github"
          className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5"
          href="https://github.com/MykytaH"
        >
          <FaGithub className="h-5 w-5"></FaGithub>
        </a>
        <p>© Copyright {date.getFullYear()} MykytaH</p>
      </div>
    </footer>
  );
}
