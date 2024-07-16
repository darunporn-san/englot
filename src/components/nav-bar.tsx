"use client";
import Link from "next/link";
import { useState } from "react";

const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Benefits", path: "/blog" },
  { id: 3, name: "Our Classes", path: "/about" },
  { id: 4, name: "Contact Us", path: "/contact-us" },
];

//wilxiiix

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
                <span>Englot</span>
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden lg:flex gap-8 ">
                {NavLinks.map((link) => (
                  <Link key={link.id} href={link.path}>
                    <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">
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
              <Link key={link.id} href={link.path}>
                <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-emerald-400">
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
