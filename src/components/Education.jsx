import EducationItem from "./EducationItem";
import { EDUCATION as education } from "../data/data";

export default function Education() {
  return (
    <>
      <div
        class="h-screen pt-20 grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4"
        id="education"
      >
        <div class="col-span-1 flex justify-center md:justify-center">
          <div class="relative h-max ">
            <h2 class="text-xl font-bold uppercase ">Education</h2>
            <span class="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
          </div>
        </div>
        <div class="col-span-1 flex flex-col md:col-span-3">
          {education.map((item) => (
            <EducationItem
              title={item.title}
              place={item.place}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </div>
      {/* <h2 className="" id="education">Education</h2>
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
      </ul> */}
    </>
  );
}
