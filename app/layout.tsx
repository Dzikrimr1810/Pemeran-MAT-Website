
import type { Metadata } from "next";
import {Bricolage_Grotesque} from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Intropage from "./components/Intropage";

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'], // Pilih subset font sesuai kebutuhan
  weight: ['200', '300', '400', '500', '600', '700', '800'], // Pilih berat font
})

export const metadata: Metadata = {
  title: "Pameran seni MAT DKV UNS 2023",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.className} bg-background`}
      >
        <Intropage />
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
