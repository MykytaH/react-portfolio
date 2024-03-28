import { FaArrowUp, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-x-0 -top-3 flex justify-center sm:-top-5">
        <Link
          className="rounded-full text-neutral-400 bg-neutral-900 p-1 ring-neutral-500 ring-offset-2 ring-offset-gray-700/80 hover:ring-2 hover:outline-none hover:cursor-pointer sm:p-2"
          to="summary"
        >
          <FaArrowUp className="h-6 w-6 " />
        </Link>
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
