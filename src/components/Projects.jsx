import hotelsImg from "../assets/hotels.png";
import { PROJECTS } from "../data/data";

export default function Projects() {
  return (
    <>
      <div
        className="h-auto grid grid-cols-1 gap-y-4 pt-16 first:pt-0 last:pb-0  md:grid-cols-12 "
        id={"projects"}
      >
        <div className="col-span-1 flex justify-center md:justify-end md:pr-16 md:col-span-3">
          <div className="relative h-max">
            <h2 className="text-xl font-bold uppercase ">Projects</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span>
          </div>
        </div>
        {PROJECTS.map((collection) => (
          <div className="col-span-1 sm:col-span-4 grid grid-cols-1 ">
            <p className="uppercase text-center  font-bold text-lg text-neutral-300">
              {collection.title}
            </p>

            {collection.projects.map((project) => (
              <div className="pt-4 px-6">
                <div className="relative  overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
                  <img
                    alt="Project title 1"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    className="h-full w-full"
                    src={project.imgLink}
                  />
                  <a
                    className="absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300 opacity-0 hover:opacity-85 "
                    href={project.link}
                    target="_blank"
                  >
                    <div className="relative h-full w-full p-4">
                      <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
                        <h2 className="text-center font-bold text-white opacity-100">
                          {project.title}
                        </h2>
                        <p className="text-xs text-white opacity-100 sm:text-sm">
                          {project.description}{" "}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
