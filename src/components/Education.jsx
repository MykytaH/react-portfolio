import EducationItem from "./EducationItem";

export default function Education({ title, type }) {
  return (
    <>
      <div className="col-span-1 flex justify-center md:justify-end md:pr-16">
        <div className="relative h-max ">
          <h2 className="text-xl font-bold uppercase ">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="col-span-1 border-b-2 border-neutral-700 flex flex-col md:col-span-3">
        {type.map((item) => (
          <EducationItem
            key={item.title}
            title={item.title}
            titleLink={item.titleLink}
            adress={item.adress}
            place={item.place}
            placeLink={item.placeLink}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
