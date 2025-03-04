import React, { useState } from "react";
import { navLinks } from "../constants";



const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Hamid
          </a>
          <button 
            onClick={toggleMenu} 
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" 
            aria-label="Toggle menu"
          >
            
            {isOpen ? (
              <img src="/assets/close.svg" alt="Close" className="w-6 h-6" />
            ) : (
              <img src="/assets/menu.svg" alt="Menu" className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`nav-sidebar ${isOpen ? 'max-h-screen py-5' : 'max-h-0 py-0'}`}
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;