import { useState } from "react";
import NavItem from "./NavItem";
import ShoppingCart from "./ShoppingCart";
import HamburgerIcon from '../../assets/images/HamburgerIcon.svg';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex flex-col bg-amber-400 text-white p-3 shadow-xl">
      {/* Logo */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <img
            src={HamburgerIcon}
            alt="Logo"
            className="svg-white w-10 h-10 mx-3 cursor-pointer"
          />
          <h1 className="text-3xl font-bold">burger.CO</h1>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavItem href="" title="Menü" />
          <NavItem href="" title="Éttermek" />
          <NavItem href="" title="Kapcsolat" />
          <ShoppingCart />
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center p-3">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-amber-400 shadow-lg z-40 flex flex-col"
        >
          <a
            href="#menu"
            className="py-3 px-6 border-b border-amber-300 text-white hover:bg-amber-500"
            onClick={() => setMobileOpen(false)}
          >
            Menü
          </a>
          <a
            href="#etterem"
            className="py-3 px-6 border-b border-amber-300 text-white hover:bg-amber-500"
            onClick={() => setMobileOpen(false)}
          >
            Éttermek
          </a>
          <a
            href="#kapcsolat"
            className="py-3 px-6 border-b border-amber-300 text-white hover:bg-amber-500"
            onClick={() => setMobileOpen(false)}
          >
            Kapcsolat
          </a>
          <a
            href="/cart"
            className="py-3 px-6 text-white font-bold hover:bg-amber-500"
            onClick={() => setMobileOpen(false)}
          >
            Ugrás a kosárhoz
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
