'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import Image from "next/image";
import Banner from "@/components/banner";
import Router from "next/router";
import { usePathname } from "next/navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  console.log('pathname: ' + pathname)
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <div className={`w-full ${pathname === '/' && `banner`} bg-center `}>
          <div className={`w-full bg-black  text-white ${pathname === '/' && `opacity-60`}`}>
            <Navbar />
            {pathname === '/' && <Banner />}
          </div>
        </div>
        <hr />

        <div className=" max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-7xl m-auto">{children}</div>
      </body>
    </html>
  );
}
