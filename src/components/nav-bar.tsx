"use client";
import { useActivePath } from "@/utils/helper";
import Link from "next/link";
import { useState } from "react";

const NavLinks = [
  { id: 1, name: "ประวัติ", path: "/history" },
  { id: 2, name: "ผลงาน", path: "/working" },
  { id: 3, name: "ไลฟ์", path: "/live" },
  { id: 4, name: "Trend-X", path: "/trend-x" },
  { id: 5, name: "ตารางงาน", path: "/schedule" },
];

//wilxiiix

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const checkActivePath = useActivePath();

  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-16 my-8">
          <div>
            <a
              href="/"
              className="flex gap-1 font-bold  items-center "
            >
              <span className="material-icons mr-3 " >group</span>
              <span className="text-2xl md:text-4xl">Englot</span>
            </a>
          </div>
        </div>{" "}
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.path} className={checkActivePath(link.path) ? 'rounded-lg text-red-400 text-3xl' : 'text-white'}>
              <li className="navbarLi ">{link.name}</li>
            </Link>
          ))}
        </ul>
        <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <span className="material-icons">menu</span>
              </button>
            </div>
      </div>
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-2 font-bold tracking-wider">
            {NavLinks.map((link) => (
              <Link key={link.id} href={link.path} className={checkActivePath(link.path) ? 'bg-red-500 rounded-lg text-white ' : 'text-gray-700'}>
                <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-lime-100 ">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
