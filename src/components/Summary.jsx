import { Link as ScrollLink } from "react-scroll";
import me from "../assets/me.png";
import resume from "../assets/Gavrilenko_Resume_frontend.pdf";

import { FaArrowDown as Arrow, FaRegEye } from "react-icons/fa";

export default function Summary() {
  return (
    <>
      <div
        id="summary"
        className="h-screen flex flex-col items-center justify-center gap-y-10 text-center px-4"
      >
        <img
          alt="night city"
          fetchpriority="high"
          width="1920"
          height="1282"
          decoding="async"
          data-nimg="1"
          className="absolute z-0 h-full w-full object-cover"
          src="https://images.wallpaperscraft.ru/image/single/nochnoj_gorod_zdaniia_ogni_178307_1280x1024.jpg"
        />
        <div className="flex flex-col items-center rounded-xl bg-gray-800/60 p-6 text-center shadow-lg backdrop-blur-sm">
          <img
            src={me}
            alt="my real photo"
            className="rounded-3xl h-50 z-10 pb-5"
          />
          <h1 className="text-3xl font-bold z-10 pb-10">
            Я Никита Гавриленко.
          </h1>
          <p className="max-w-4xl z-10 pb-10 text-lg">
            Junior React веб разработчик. Изучал в университете, самостоятельно
            и закончил курсы по HTML / CSS / JS / React и с нетерпением ищу
            возможность применить знания на практике!
          </p>
          <div>
            <a
              className="px-6 py-2 border-2 rounded-full border-orange-500 flex items-center gap-2 hover:bg-neutral-600/50 duration-300"
              href={resume}
              type="button"
              target="_blank"
            >
              <p>Резюме</p>
              <FaRegEye className="mt-px" />
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <ScrollLink
            className={`animate-bounce hover:animate-bounceSlow hover:cursor-pointer rounded-full bg-neutral-800 p-1
             ring-orange-500 ring-offset-2 ring-offset-gray-700/80  hover:ring-2 hover:outline-none  sm:p-2`}
            to="education"
          >
            <Arrow className="h-5 w-5 bg-transparent sm:h-6 sm:w-6 text-neutral-400" />
          </ScrollLink>
        </div>
      </div>
    </>
  );
}
