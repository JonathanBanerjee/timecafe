import { metadata as menuMetadata } from "./metadata";

export const metadata = menuMetadata;

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
