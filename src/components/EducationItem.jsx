export default function EducationItem({ title, place, date, description }) {
  return (
    <>
      <div class="flex flex-col pb-8 text-center last:pb-0 md:text-left">
        <div class="flex flex-col pb-4">
          <h2 class="text-xl font-bold">{title}</h2>
          <div class="flex items-center justify-center gap-x-2 md:justify-start">
            <span class="flex-1 text-sm font-medium italic sm:flex-none">
              {place}
            </span>
            <span>•</span>
            <span class="flex-1 text-sm sm:flex-none">{date}</span>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
}
