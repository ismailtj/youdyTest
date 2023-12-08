export default function FooterBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="basis-1/3 gap-3 m-1 p-1"
      style={{ backgroundColor: "#e9e6e3" }}
    >
      <p className="text-center mb-2">{title}</p>
      {children}
    </div>
  );
}
