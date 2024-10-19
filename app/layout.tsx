import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-text",
  weight: ["100", "200", "300", "600", "900"],
  display: "swap",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["200", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hansom cycles",
  description:
    "Hansom Cycling is an independant maker of premium bikes. We are a Belgium company founded in 2020 by a passionate group of cycling and design enthusiasts.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "en";

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${oswald.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
