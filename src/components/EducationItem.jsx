export default function EducationItem({
  title,
  place,
  date,
  description,
  adress,
  titleLink,
  placeLink,
}) {
  const cssAnchor =
    "text-orange-500 hover:text-orange-800 hover:transition-colors hover:duration-300";
  return (
    <>
      <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
        <div className="flex flex-col pb-4">
          <h2 className="text-xl font-bold">
            {title}
            <a href={adress} className={cssAnchor}>
              {titleLink}
            </a>
          </h2>

          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <span className="flex-1 text-sm font-medium italic sm:flex-none">
              {placeLink ? (
                <a href={placeLink} className={cssAnchor}>
                  {place}
                </a>
              ) : (
                <>{place}</>
              )}
            </span>
            {date && (
              <>
                <span>•</span>
                <span className="flex-1 text-sm sm:flex-none">{date}</span>
              </>
            )}
          </div>
        </div>
        {description && <p>{description}</p>}
      </div>
    </>
  );
}
