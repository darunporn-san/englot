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
  const checkActivePath = useActivePath()

  return (
    <nav>
      <div className="max-w-7xl mx-auto">
        <div className="flex mx-auto justify-between w-5/6 ">
          <div className="flex items-center gap-16 my-8">
            <div>
              <a
                href="/"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <span className="material-icons mr-3">group</span>
                <span className="text-2xl">Englot</span>
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden lg:flex gap-8 ">
                {NavLinks.map((link) => (
                  <Link key={link.id} href={link.path} className={checkActivePath(link.path) ? 'bg-red-500 text-white rounded-md' : 'text-gray-700'}>
                    <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-lime-100 ">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <span className="material-icons">menu</span>
              </button>
            </div>
          </div>
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
    </nav>
  );
};

export default Navbar;
