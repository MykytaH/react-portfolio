import { useState } from "react";
import { FaBars, FaReact, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  let slideMenu;

  clicked ? (slideMenu = " max-sm:left-0") : (slideMenu = "");

  const cssNavBar =
    "fixed z-50 top-0 w-full flex justify-between items-center p-4 bg-neutral-900/50 backdrop-blur" +
    " max ";

  const cssAnchor =
    "-m-1.5 p-1.5 rounded-md font-bold  hover:text-orange-500 hover:transition-colors hover:duration-300 hover:cursor-pointer " +
    "sm:hover:text-orange-500 text-neutral-100 ";

  const cssUL =
    "gap-8 flex z-60" +
    " max-sm:fixed max-sm:-left-full max-sm:flex-col max-sm:justify-center " +
    " max-sm:bg-neutral-900 max-sm:w-4/5 max-sm:h-screen max-sm:top-14 max-sm:items-center transition-all duration-700 " +
    " max-sm:text-3xl max-sm:gap-20 max-sm:rounded-tr-2xl ";

  return (
    <>
      <div className={cssNavBar + ""}>
        <ScrollLink
          to="summary"
          className={cssAnchor}
          spy={false}
          smooth={true}
          offset={0}
          duration={0}
          onClick={() => setClicked(false)}
        >
          <FaReact className="h-7 w-7" />
        </ScrollLink>

        <ul className={cssUL + slideMenu}>
          <li>
            <ScrollLink
              to="summary"
              className={cssAnchor}
              spy={true}
              smooth={true}
              offset={0}
              duration={0}
              onClick={() => setClicked(false)}
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
              onClick={() => setClicked(false)}
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
              onClick={() => setClicked(false)}
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
              onClick={() => setClicked(false)}
            >
              Projects
            </ScrollLink>
          </li>
        </ul>

        <button className="hover:text-orange-400 duration-300">
          {clicked ? (
            <FaTimes className="h-7 w-7 sm:hidden" onClick={handleClick} />
          ) : (
            <FaBars className="h-7 w-7 sm:hidden" onClick={handleClick} />
          )}
        </button>
      </div>
    </>
  );
}
