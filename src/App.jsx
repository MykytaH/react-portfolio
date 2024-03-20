import "./App.css";
import Header from "./components/Header";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Header />
      <Summary />

      <h2 id="education">Education</h2>
      <ul>
        <li>High school: Severodonetsk liceum, Faculty of math and physics</li>
        <li>
          1st Bachelor deegre: Ukrainian national university of Kharkiv, Faculty
          of cosmical teht, spetiality of system analisys
        </li>
        <li>
          2nd Bachelor deegre: University of Luhansk by the name of Vladimir
          Dahl, Faculty of Applied Mathematics and Programming
        </li>
        <li>Python course by Beetroot Academy</li>
        <li>
          <a href="https://udemy.com/course/the-complete-web-development-bootcamp">
            WEB development course by Udemy Academy
          </a>
        </li>
      </ul>
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

      <h2 id="skills">Skills</h2>
      <ul>
        <li>Customer service: ⭐️⭐️⭐️⭐️⭐️</li>
        <li>Microsoft Office Suite: ⭐️⭐️⭐️</li>
        <li>Organizational skills: ⭐️⭐️⭐️⭐️</li>
      </ul>

      <footer>
        <p>© 2023 MykytaH. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
