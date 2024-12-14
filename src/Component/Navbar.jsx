import React, { useState } from "react";
import human1 from "../../src/assets/human1.avif";
import {Link} from "react-scroll";
const Navbar = () => {
  const [IsMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItem = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Projects",
    },
    {
      id: 3,
      text: "Certificates",
    },
    {
      id: 4,
      text: "About",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!IsMobileMenuOpen);
  };
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between h-16 shadow-md px-5 md:px-10 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex items-center space-x-2">
          <img
            className="h-12 w-12 mt-2 rounded-full"
            src={human1}
            alt="Profile"
          />
          <div>
            <h1 className="font-semibold text-xl cursor-pointer">
              Daniya<span className="text-green-500 text-2xl">l</span>
            </h1>
            <p className="text-sm">Web developer</p>
          </div>
        </div>
        <div className="hidden md:flex gap-10 items-center">
          {navItem.map(({ id, text }) => (
            <h4
              key={id}
              className="cursor-pointer text-lg hover:scale-105 duration-200"
            >
              <Link to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active">
                {text}
              </Link>
            </h4>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-lg">
            ☰
          </button>
        </div>
        {/* Mobile Menu Items */}
        {IsMobileMenuOpen && (
          <div className="w-full flex flex-col items-center gap-2 mt-2 z-50 bg-white md:hidden">
            {navItem.map(({ id, text }) => (
              <h4
                key={id}
                className="cursor-pointer text-lg hover:scale-105 duration-200"
              >
                <Link to={text}
                onClick={toggleMobileMenu}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active">
                {text}
              </Link>
              </h4>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
