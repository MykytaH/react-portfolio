import hotelsImg from "../assets/hotels.png";
import ecvlidImg from "../assets/evclid.png";
import gridImg from "../assets/grid.png";
import radioImg from "../assets/radio.png";
import foodImg from "../assets/food.png";
import nextMealsImg from "../assets/nextMeals.png";
import reduxImg from "../assets/redux.png";
import eventsImg from "../assets/events.png";
import events2Img from "../assets/events-II.png";
import qpickImg from "../assets/qpick.png";

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
    skills: ["React 18, Next.js", "Redux", "Router", "Query"],
  },
  {
    title: "Другое",
    skills: ["WebPack", "REST API", "SQL", "Git", "Pixel Perfect, Figma"],
  },
  {
    title: "Языки",
    skills: ["English - C1", "Русский - native", "Украинский - native"],
  },
];

export const PROJECTS = [
  {
    title: "react",
    projects: [
      {
        title: "QPICK",
        description:
          "Audio accessories store,created with usage of Router and Context API. Created as a test for Neoflex internship. Deploy on GitHub Pages.",
        imgLink: qpickImg,
        link: "https://mykytah.github.io/testNeoflex",
        ghLink: "https://github.com/MykytaH/testNeoflex",
      },
      {
        title: "NextLevel Meals",
        description: `App for sharing your favorite meals with the world.
          Build on Next.js with usage of internal SQLite3 database for storing meals.
          Deployment preview on Vercel. Note, that images added at request won't be available.
          Only images that are in the data at the moment of BUILD are served by NEXT.
          As such, adding user meals are disabled. Deploy on Vercel`,
        imgLink: nextMealsImg,
        link: "https://next-meals-five.vercel.app",
        ghLink: "https://github.com/MykytaH/next-meals",
      },
      {
        title: "Events Notebook 2.0",
        description:
          "A simple app for creating and editing notes about events, created with Router and React Query. Just code on gitHub",
        imgLink: events2Img,
        link: "https://github.com/MykytaH/events-II",
        ghLink: "https://github.com/MykytaH/events-II",
      },
      {
        title: "Food Order",
        description:
          "A single page app for ordering food, with usage of Context API. Deploy on GitHub Pages.",
        imgLink: foodImg,
        link: "https://mykytah.github.io/food-order/",
        ghLink: "https://github.com/MykytaH/food-order",
      },

      {
        title: "Events Notebook",
        description:
          "An older version of app creating and editing notes about events, created with only Router, but with Authentication on backend. Just code on gitHub",
        imgLink: eventsImg,
        link: "https://github.com/MykytaH/events",
        ghLink: "https://github.com/MykytaH/events",
      },
      {
        title: "Redux Book Order",
        description:
          "Very simple app, created with Redux, with database in Google's Firebase. Deploy on GitHub Pages.",
        imgLink: reduxImg,
        link: "https://mykytah.github.io/redux/",
        ghLink: "https://github.com/MykytaH/redux",
      },
    ],
  },
  {
    title: "html & css",
    projects: [
      {
        title: "Hotels",
        description: "Site with hotels",
        imgLink: hotelsImg,
        link: "https://mykytah.github.io/examples/hotels/",
        ghLink: "https://github.com/MykytaH/examples",
      },
      {
        title: "Radio",
        description: "Site with radio",
        imgLink: radioImg,
        link: "https://mykytah.github.io/examples/radio/",
      },
      {
        title: "Evclid",
        description: "Site with evclid",
        imgLink: ecvlidImg,
        link: "https://mykytah.github.io/examples/evclid/",
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
