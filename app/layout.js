import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Roboto_Slab } from "next/font/google";
import StoreProvider from "./store/storeProvider";
import ScrollToUp from "./site/home/ScrollToUp";
import Navbar from "./site/Navbar";
import Footer from "./site/Footer";

const playfair = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arkan",
  description: "Discover and explore the best real estate options with Aqar1",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${playfair.className}`} >
        <Navbar />
          {children}
          <ScrollToUp />
          <Footer/>
        </body>
      </html>
  );
}
