import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="hidden fixed left-0 top-0 w-80 h-screen bg-primary py-10 lg:block text-white">
        <div className="px-5">
          <p className="text-2xl font-semibold text-center py-10">
            Ar<span className="text-secondary">Media</span>
          </p>
        </div>
        <div className="space-y-7 lg:flex lg:flex-col px-5">
          <NavLink
            to="/"
            activeClassName="active"
            className="py-2 px-2 rounded-sm hover:bg-grey hover:font-semibold"
          >
            Discover
          </NavLink>
          <NavLink
            to="/popularpage"
            activeClassName="active"
            className="py-2 px-2 rounded-sm hover:bg-grey hover:font-semibold"
          >
            Popular
          </NavLink>
          <NavLink
            to="/topratedpage"
            activeClassName="active"
            className="py-2 px-2 rounded-sm hover:bg-grey hover:font-semibold"
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/favorite"
            activeClassName="active"
            className="py-2 px-2 rounded-sm hover:bg-grey hover:font-semibold"
          >
            Upcoming
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
