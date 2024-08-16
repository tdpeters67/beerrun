import { Link } from "react-scroll";
import Button from "../common/Button";
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/brlogo.jpg";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function handleChange() {
    setMenu(!menu);
  }
  function closeNav() {
    setMenu(false);
  }
  return (
    <div className=" z-50 fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <img src={logo} className="h-16 object-fill" alt="" />
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium text-nowrap  gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <div className=" relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="menus"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" hover:text-brightColor transition-all cursor-pointer"
                >
                  Menus
                </Link>
                <FiChevronDown className="cursor-pointer" size={25} />
              </div>
              <ul className=" absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="menus"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-brightColor transition-all cursor-pointer"
                  >
                    Lunch
                  </Link>
                </li>
                <li>
                  <Link
                    to="menus"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-brightColor transition-all cursor-pointer"
                  >
                    Dinner
                  </Link>
                </li>
                <li>
                  <Link
                    to="menus"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-brightColor transition-all cursor-pointer"
                  >
                    Beer
                  </Link>
                </li>
                <li>
                  <Link
                    to="menus"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-brightColor transition-all cursor-pointer"
                  >
                    Brunch
                  </Link>
                </li>
                <li>
                  <Link
                    to="menus"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-brightColor transition-all cursor-pointer"
                  >
                    Breakfast Tacos
                  </Link>
                </li>
                <li>
                  <Link
                    to="menus"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-brightColor transition-all cursor-pointer"
                  >
                    Wine and Cocktails
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="retail"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Retail
            </Link>{" "}
            <Link
              to="events"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Events & Catering
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>
            <Link
              to="order"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              <Button title="Order Now" />
            </Link>
          </nav>
          <div className="md:hidden flex items-center">
            {menu ? (
              <FiX size={25} onClick={handleChange} />
            ) : (
              <FiAlignJustify size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeNav}
          >
            Home
          </Link>
          <Link
            to="menus"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeNav}
          >
            Menus
          </Link>
          <Link
            to="retail"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeNav}
          >
            Retail
          </Link>
          <Link
            to="events"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeNav}
          >
            Events & Catering
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeNav}
          >
            About Us
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeNav}
          >
            Reviews
          </Link>
          <Link
            to="order"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeNav}
          >
            <Button title="Order Now" />
          </Link>
        </div>
      </div>
    </div>
  );
}
