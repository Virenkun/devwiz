import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="flex items-center justify-between flex-wrap bg-trasnparent backdrop-blur-lg p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 gap-3">
          <Image
            src="/magic-wand.png"
            alt="DevWiz Logo"
            width={28}
            height={28}
          />
          <span className="font-semibold text-xl tracking-tight">DevWiz</span>
        </div>
        <ul className="flex items-center justify-between flex-wrap gap-4 mr-8">
         
          <li>
            <Link
              href="#"
              className="block font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
