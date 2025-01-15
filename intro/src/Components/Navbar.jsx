import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="w-full text-white py-3 bg-primary sticky top-0 z-30">
        <div className="flex justify-between items-center px-4 container mx-auto">
          <Link to="/" className="text-xl font-semibold">
            AR<span className="text-secondary">Media</span>
          </Link>

          <div className="space-x-10 text-white hidden lg:flex lg:items-center">
            <NavLink to="/" activeclassname="active">
              Discover
            </NavLink>
            <NavLink to="/blog" activeclassname="active">
              Blog
            </NavLink>
            <NavLink to="/topratedpage" activeclassname="active">
              Top Rated
            </NavLink>
            {/* <NavLink to="/favorite" activeclassname="active">
              Upcoming
            </NavLink> */}
            <NavLink to="/contact" activeclassname="active">
              Contact Us
            </NavLink>
            <NavLink
              to="/signup"
              className="border border-secondary font-semibold px-4 text-sm text-white py-2 rounded-md shadow-lg hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Navbar Starts */}
          <button onClick={toggleMenu} className="lg:hidden text-secondary">
            {open ? (
              <IoIosClose fontSize="25" />
            ) : (
              <AiOutlineMenu fontSize="25" />
            )}
          </button>

          {/* Mobile Navbar Ends */}
        </div>
      </nav>
      <div
        className={`fixed ${
          open ? "block" : "hidden"
        } bg-primary text-white w-full flex justify-center top-0 items-center z-40 lg:hidden h-screen`}
      >
        <div className="space-y-10 flex justify-center items-center flex-col py-10">
          <NavLink to="/" activeclassname="active" className="text-lg">
            Discover
          </NavLink>
          <NavLink to="/blog" activeclassname="active" className="text-lg">
            Blog
          </NavLink>
          <NavLink
            to="/topratedpage"
            activeclassname="active"
            className="text-lg"
          >
            Top Rated
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            Contact Us
          </NavLink>
          <NavLink
            to="/signup"
            className="border border-secondary font-semibold px-4 text-sm text-white py-2 rounded-md shadow-lg hover:bg-secondary hover:text-white transition-all duration-300"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
