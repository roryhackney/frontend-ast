import type { Metadata } from "next";
import { Patrick_Hand, M_PLUS_Rounded_1c } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

export const headingsFont = Patrick_Hand({
  weight: ["400"],
  subsets: ["latin"],
  fallback: ["Times New Roman", "serif"]
});

const bodyFont = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"]
});

export const metadata: Metadata = {
  title: "Art Supply Tracker",
  description: "A cool site for keeping track of your art supply collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
