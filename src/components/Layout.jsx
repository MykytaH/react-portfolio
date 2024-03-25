export default function Layout({ id, children }) {
  return (
    <div
      className="h-auto  grid grid-cols-1 gap-y-4 pt-16 px-6 first:pt-0 last:pb-0  md:grid-cols-4 "
      id={id}
    >
      {children}
    </div>
  );
}
