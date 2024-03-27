import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Education from "./components/Education";

import { COURCES, EDUCATION } from "./data/data";
import Skills from "./components/Skills";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-neutral-800 text-slate-100">
      <Navbar />
      <Summary />
      <Layout id={"education"}>
        <Education title="Education" type={EDUCATION} />
        <Education title="Courses" type={COURCES} />{" "}
      </Layout>
      <Layout id={"skills"}>
        <Skills />
      </Layout>
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
