import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMenu, LuMoon, LuSun } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = open ? "auto" : "hidden";
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const closeMobileMenu = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Navigation */}
      <nav
        className={`w-full sticky bg-primary top-0 z-50 py-4 transition-all duration-300
         `}
      >
        <div className="flex items-center container mx-auto px-4 sm:px-6 lg:px-8 justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl text-white font-semibold">
            Mov<span className="text-secondary">Atti</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <div className="flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer text-sm duration-300 text-white hover:text-secondary transition-colors ${
                    isActive ? "text-secondary" : ""
                  }`
                }
              >
                Discover
              </NavLink>
              <NavLink
                to="/popular"
                className={({ isActive }) =>
                  `cursor-pointer text-sm text-white duration-300 hover:text-secondary transition-colors ${
                    isActive ? "text-secondary" : ""
                  }`
                }
              >
                Popular
              </NavLink>
              <NavLink
                to="/topratedpage"
                className={({ isActive }) =>
                  `cursor-pointer text-sm text-white duration-300 hover:text-secondary transition-colors ${
                    isActive ? "text-secondary" : ""
                  }`
                }
              >
                Top Rated
              </NavLink>
              <NavLink
                to="/upcoming"
                className={({ isActive }) =>
                  `cursor-pointer text-sm text-white duration-300 hover:text-secondary transition-colors ${
                    isActive ? "text-secondary" : ""
                  }`
                }
              >
                Upcoming
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white transition-all duration-300"
            aria-label="Toggle Menu"
          >
            {open ? (
              <IoClose className="text-2xl" />
            ) : (
              <LuMenu className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 h-[calc(100vh-80px)] w-full z-40 transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        } bg-primary shadow-lg flex flex-col items-center justify-start lg:hidden`}
      >
        <div className="w-full px-6 flex flex-col items-center gap-4 py-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full text-left text-lg py-3 px-4 rounded-md transition-colors duration-300 ${
                isActive
                  ? "text-secondary bg-emerald-900/20"
                  : "text-white hover:text-secondary hover:bg-zinc-100"
              }`
            }
            onClick={closeMobileMenu}
          >
            Discover
          </NavLink>
          <NavLink
            to="/popular"
            className={({ isActive }) =>
              `w-full text-left text-lg py-3 px-4 rounded-md transition-colors duration-300 ${
                isActive
                  ? "text-secondary bg-emerald-900/20"
                  : "text-white hover:text-secondary hover:bg-zinc-100"
              }`
            }
            onClick={closeMobileMenu}
          >
            Popular
          </NavLink>
          <NavLink
            to="/topratedpage"
            className={({ isActive }) =>
              `w-full text-left text-lg py-3 px-4 rounded-md transition-colors duration-300 ${
                isActive
                  ? "text-secondary bg-emerald-900/20"
                  : "text-white hover:text-secondary hover:bg-zinc-100"
              }`
            }
            onClick={closeMobileMenu}
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/upcoming"
            className={({ isActive }) =>
              `w-full text-left text-lg py-3 px-4 rounded-md transition-colors duration-300 ${
                isActive
                  ? "text-secondary bg-emerald-900/20"
                  : "text-white hover:text-secondary hover:bg-zinc-100"
              }`
            }
            onClick={closeMobileMenu}
          >
            Upcoming
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
