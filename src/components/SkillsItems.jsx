export default function SkillsItems({ skills }) {
  return (
    <>
      {skills.map((skill) => (
        <div key={skill} className="flex flex-col">
          <span className="ml-2 text-sm font-medium">{skill}</span>
        </div>
      ))}
    </>
  );
}
