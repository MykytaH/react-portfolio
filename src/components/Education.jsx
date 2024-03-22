import EducationItem from "./EducationItem";
import { EDUCATION, COURCES } from "../data/data";

export default function Education() {
  return (
    <>
      <div
        className="h-screen pt-20 grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4"
        id="education"
      >
        <div className="col-span-1 flex justify-center md:justify-end md:pr-16">
          <div className="relative h-max ">
            <h2 className="text-xl font-bold uppercase ">Education</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
          </div>
        </div>
        <div className="col-span-1 flex flex-col md:col-span-3">
          {EDUCATION.map((item) => (
            <EducationItem
              key={item.title}
              title={item.title}
              place={item.place}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
        <div className="col-span-1 flex justify-center md:justify-end md:pr-16">
          <div className="relative h-max ">
            <h2 className="text-xl font-bold uppercase ">Cources</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
          </div>
        </div>
        <div className="col-span-1 flex flex-col md:col-span-3">
          {COURCES.map((item) => (
            <EducationItem
              key={item.title}
              title={item.title}
              titleLink={item.titleLink}
              adress={item.adress}
              place={item.place}
              placeLink={item.placeLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}
