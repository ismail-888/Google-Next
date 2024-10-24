// import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import Footer from "@/components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Google Clone",
  description:
    "An open source Google clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='relative min-h-screen'
      >
        <Suspense>
        {children}
        </Suspense>
        <Footer/>
      </body>
    </html>
  );
}
