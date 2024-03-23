export default function SkillsAll({ title, children }) {
  return (
    <>
      <div className=" flex flex-col">
        <span className="text-center text-lg font-bold">{title}</span>
        <div className="flex flex-col gap-y-2">{children}</div>
      </div>
    </>
  );
}
