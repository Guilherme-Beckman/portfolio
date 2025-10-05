import type { Metadata } from "next";
import { Average_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/nav/nav";
import { FadeIn } from "./components/animations/fade-in";
import { NextIntlClientProvider } from "next-intl";
const averageSans = Average_Sans({
  variable: "--font-main",
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Developer Portfolio",
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
        <NextIntlClientProvider>
          <FadeIn fromY={-20}>
            <Nav />
          </FadeIn>
        </NextIntlClientProvider>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>{" "}
      </body>
    </html>
  );
}
