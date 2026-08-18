import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";
import FloatingIcons from "@/component/home/FloatingIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medintegrity Group",
  description: "Independent Medical Equipment Verification",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <FloatingIcons />
        {children}
        <Footer />
      </body>
    </html>
  );
}