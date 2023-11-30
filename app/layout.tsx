import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Lauren & Jason",
  description: "Please join us for the engagement party",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
