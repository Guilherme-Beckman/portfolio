import type { Metadata } from "next";
import { Average_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/nav/nav";
const averageSans = Average_Sans({
  variable: "--font-main",
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Developer Portifolio",
  description: "A personal developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={averageSans.variable}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
