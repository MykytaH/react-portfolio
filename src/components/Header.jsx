export default function Header() {
  const cssAnchor =
    "-m-1.5 p-1.5 rounded-md font-bold  hover:text-orange-500 hover:transition-colors hover:duration-300 focus:outline-none  sm:hover:text-orange-500 text-neutral-100 active:text-orange-500";
  return (
    <>
      <header className="fixed top-0 z-50  w-full bg-neutral-900/50 p-4 backdrop-blur ">
        <nav className="flex justify-center gap-x-8">
          <ul className="gap-8 flex">
            <li>
              <a href="#summary" className={cssAnchor}>
                Summary
              </a>
            </li>
            <li>
              <a href="#education" className={cssAnchor}>
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className={cssAnchor}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={cssAnchor}>
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
