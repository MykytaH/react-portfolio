import SkillsAll from "./SkillsAll";
import { SKILLS } from "../data/data";
import SkillsItems from "./SkillsItems";

export default function Skills() {
  return (
    <>
      <div className="col-span-1 flex justify-center md:justify-end md:pr-16">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase ">Скилы</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span>
        </div>
      </div>
      <div className="border-b-2 border-neutral-700 pb-4 col-span-1 flex flex-col md:col-span-3">
        <div className="  grid grid-cols-1 gap-6 md:grid-cols-7">
          {SKILLS.map((item) => (
            <SkillsAll key={item.title} title={item.title}>
              <SkillsItems skills={item.skills} />
            </SkillsAll>
          ))}
        </div>
      </div>
    </>
  );
}
