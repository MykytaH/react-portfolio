import hotelsImg from "../assets/hotels.png";
import ecvlidImg from "../assets/evclid.png";
import gridImg from "../assets/grid.png";
import radioImg from "../assets/radio.png";
import foodImg from "../assets/food.png";

export const EDUCATION = [
  {
    title: "Системный анализ и управление: магистратура",
    place:
      'Харьковский аэрокосмический университет имени Н.Е. Жуковского "ХАИ"',
    date: "Окончил в 2022",
  },
  {
    title: "Прикладная математика и информатика: бакалавриат",
    place: "Луганский государственный университет им. Даля",
    date: "в данный момент на магистратуре",
  },
];

export const COURCES = [
  {
    title: " Благодаря высокому уровню английского проходил курсы на ",
    titleLink: "Udemy Academy:",
    adress: "https://www.udemy.com/",
  },
  {
    title: "Курс по HTML, CSS и JS: ",
    titleLink: "The Complete 2024 Web Development Bootcamp",
    adress:
      "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    place: "Udemy Academy",
  },
  {
    title: "Курс по React: ",
    titleLink: "React - The Complete Guide 2024 (incl. React Router & Redux)",
    adress: "https://www.udemy.com/course/react-the-complete-guide-incl-redux",
    place: "Udemy Academy",
  },
];

export const SKILLS = [
  {
    title: "HTML, CSS, JS",
    skills: ["HTML5", "CSS3", "CSS framewoks: Bootstrap, Tailwind", "JS(ES6+)"],
  },
  {
    title: "React",
    skills: ["React 18", "Redux", "Router", "Next.js"],
  },
  {
    title: "Other",
    skills: ["REST API", "SQL", "Git"],
  },
  {
    title: "Languages",
    skills: ["English - C1", "Russian - native", "Ukrainian - native"],
  },
];

export const PROJECTS = [
  {
    title: "html & css",
    projects: [
      {
        title: "Evclid",
        description: "Site with evclid",
        imgLink: ecvlidImg,
        link: "https://mykytah.github.io/examples/evclid/",
      },
      {
        title: "Hotels",
        description: "Site with hotels",
        imgLink: hotelsImg,
        link: "https://mykytah.github.io/examples/hotels/",
      },
      {
        title: "Radio",
        description: "Site with radio",
        imgLink: radioImg,
        link: "https://mykytah.github.io/examples/radio/",
      },
      {
        title: "Grid",
        description: "Site with grid",
        imgLink: gridImg,
        link: "https://mykytah.github.io/examples/grid_c/",
      },
    ],
  },
  {
    title: "react",
    projects: [
      {
        title: "Food Order",
        description:
          "Very simple app for ordering food, with usage of Context API",
        imgLink: foodImg,
        link: "https://mykytah.github.io/food-order/",
      },
      {
        title: "Evclid",
        description: "Site with evclid",
        imgLink: ecvlidImg,
        link: "https://mykytah.github.io/examples/evclid/",
      },
      {
        title: "Radio",
        description: "Site with radio",
        imgLink: radioImg,
        link: "https://mykytah.github.io/examples/radio/",
      },
      {
        title: "Grid",
        description: "Site with grid",
        imgLink: gridImg,
        link: "https://mykytah.github.io/examples/grid_c/",
      },
    ],
  },
];
