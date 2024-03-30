import { PROJECTS } from "../data/data";
import { FaLink } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <div
        className="h-auto grid grid-cols-1 gap-y-4 pt-16 first:pt-0 last:pb-0  md:grid-cols-12 "
        id={"projects"}
      >
        <div className="col-span-1 flex justify-center md:justify-end md:pr-16 md:col-span-3">
          <div className="relative h-max">
            <h2 className="text-xl font-bold uppercase ">Проекты</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span>
          </div>
        </div>
        {PROJECTS.map((collection) => (
          <div
            className="h-fit col-span-1 sm:col-span-4 grid grid-cols-1 gap-y-6"
            key={collection.title}
          >
            <p className="uppercase text-center  font-bold text-lg text-neutral-300">
              {collection.title}
            </p>

            {collection.projects.map((project) => (
              <div className="px-3" key={project.title}>
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
                      <FaLink className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
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
