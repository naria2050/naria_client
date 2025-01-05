import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Noria Holidays",
  description:
    "Noria Holidays is a luxury holiday destination specializing in exquisite beaches, beautiful landscapes, and unforgettable memories. Our team of skilled and experienced holidaymakers has crafted an unforgettable experience for our guests, making them feel like they are in a world far removed from their familiar surroundings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
