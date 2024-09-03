import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  RecoilRoots  from "./recoil/recoil"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forum Fisika",
  description: "Tempat share jawaban",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " primary-dark"}>
        <RecoilRoots children={children}/>
      </body>
    </html>
  );
}
