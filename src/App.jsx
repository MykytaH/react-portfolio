import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";

import { COURCES, EDUCATION } from "./data/data";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="bg-neutral-800 text-slate-100">
      <Header />
      <Summary />
      <div
        className="h-screen pt-20 grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4"
        id="education"
      >
        <Education title="Education" type={EDUCATION} />
        <Education title="Courses" type={COURCES} />
      </div>
      <Skills />

      <h2 id="projects">Links</h2>
      <ul>
        <li>
          <a href="https://mykytah.github.io/examples/hotels/">Hotels</a>
        </li>
        <li>
          <a href="https://mykytah.github.io/examples/evclid/">Evclid</a>
        </li>
        <li>
          <a href="https://mykytah.github.io/examples/radio/">Radio</a>
        </li>
        <li>
          <a href="https://mykytah.github.io/examples/grid_c/">Grid Example</a>
        </li>
      </ul>

      <footer>
        <p>© 2023 MykytaH. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
