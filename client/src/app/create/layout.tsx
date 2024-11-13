export default function CreateLayout({
  children,
  leftSection,
  right,
}: {
  leftSection: React.ReactNode;
  children: React.ReactNode;
  right: React.ReactNode;
}) {
  return <div className="h-full">{children}</div>;
}
