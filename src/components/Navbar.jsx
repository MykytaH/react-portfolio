import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const cssAnchor =
    "-m-1.5 p-1.5 rounded-md font-bold  hover:text-orange-500 hover:transition-colors hover:duration-300  sm:hover:text-orange-500 text-neutral-100 focus-visible:text-orange-500";

  return (
    <>
      <header className="fixed top-0 z-50  w-full bg-neutral-900/50 p-4 backdrop-blur ">
        <nav className="flex justify-center align-middle gap-x-8">
          <ul className=" gap-8 flex items-center text-o">
            <li>
              <ScrollLink
                to="summary"
                className={cssAnchor}
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                Summary
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="education"
                className={cssAnchor}
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                Education
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                className={cssAnchor}
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                className={cssAnchor}
                spy={true}
                smooth={true}
                offset={0}
                duration={0}
              >
                Projects
              </ScrollLink>
            </li>
            <FaBars />
          </ul>
        </nav>
      </header>
    </>
  );
}
