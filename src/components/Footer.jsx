import { FaArrowUp, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-x-0 -top-3 flex justify-center sm:-top-8">
        <Link
          className="rounded-full border-neutral-800 border-4 text-neutral-400 bg-neutral-900 p-1 ring-neutral-900/50 ring-offset-2 ring-offset-orange-500 hover:ring-2 hover:outline-none hover:cursor-pointer sm:p-2"
          to="summary"
        >
          <FaArrowUp className="h-6 w-6 " />
        </Link>
      </div>
      <div className="bg-neutral-900/50 w-full h-14  px-8 flex justify-between items-center">
        <div className="flex gap-4">
          <a
            aria-label="Github"
            className="-m-2  rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5"
            href="https://github.com/MykytaH"
          >
            <FaGithub className="h-5 w-5"></FaGithub>
          </a>
          <a
            aria-label="Github"
            className="-m-2 rounded-md p-2 text-gray-200 hover:text-white outline-none focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5"
            href="https://krasnodar.hh.ru/resume/718492b9ff0d05a9190039ed1f684754534446"
          >
            <img
              className="h-5 w-5"
              src="https://tech.hh.ru/api/logos/min-hh-white.png"
            />
          </a>
        </div>

        <p>© Copyright {date.getFullYear()} MykytaH</p>
      </div>
    </footer>
  );
}
