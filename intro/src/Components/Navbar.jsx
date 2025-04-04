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
            Mov<span className="text-secondary">Atti</span>
          </Link>
          
          {/* Links */}
          <div className="space-x-10 text-white hidden lg:flex lg:items-center">
            <NavLink to="/" activeclassname="active">
              Discover
            </NavLink>
            <NavLink to="/popular" activeclassname="active">
              Popular
            </NavLink>
            <NavLink to="/topratedpage" activeclassname="active">
              Top Rated
            </NavLink>
            <NavLink to="/upcoming" activeclassname="active">
              Upcoming
            </NavLink>
          </div>

          <button onClick={toggleMenu} className="lg:hidden text-secondary">
            {open ? (
              <IoIosClose fontSize="25" />
            ) : (
              <AiOutlineMenu fontSize="25" />
            )}
          </button>
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
          <NavLink to="/popular" activeclassname="active" className="text-lg">
            Popular
          </NavLink>
          <NavLink
            to="/topratedpage"
            activeclassname="active"
            className="text-lg"
          >
            Top Rated
          </NavLink>
          <NavLink to="/upcoming" activeclassname="active">
            Upcoming
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
