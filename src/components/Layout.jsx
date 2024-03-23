export default function Layout({ id, children }) {
  return (
    <div
      className="h-auto pt-20 grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4 "
      id={id}
    >
      {children}
    </div>
  );
}
