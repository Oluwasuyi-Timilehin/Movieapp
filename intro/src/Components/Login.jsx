import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
      <>
        <section className="lg:flex lg:w-full lg:h-screen">
          <div className="hidden lg:h-screen lg:w-1/2 lg:flex lg:justify-center lg:items-center lg:px-10 bg-primary relative">
            <img
              src="./src/Images/logoresize.jpg"
              className="object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-75 rounded-md"></div>
            <div className="absolute text-center px-10 text-white flex flex-col justify-center space-y-3 inset-0">
              <h1 className="text-3xl font-bold">Welcome to Our Platform</h1>
              <p className="text-xl">
                Join us and explore a world of opportunities!
              </p>
            </div>
          </div>
          <div className="mx-auto container w-full px-10 h-screen flex flex-col items-center justify-center space-y-5 lg:w-1/2">
            <div className="flex lg:hidden justify-center items-center lg:px-10 relative">
              <img
                src="./src/Images/logoresize.jpg"
                className="object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-75 rounded-md"></div>
              <div className="absolute mx-auto text-white text-center flex flex-col justify-center items-center space-y-3 inset-0 p-5">
                <h1 className="text-3xl font-bold">Welcome to Our Platform</h1>
                <p className="text-xl">
                  Join us and explore a world of opportunities!
                </p>
              </div>
            </div>
            <p className="font-semibold text-2xl lg:text-4xl">Log In</p>
            <form className="flex w-full flex-col justify-center space-y-5 lg:border lg:border-grey lg:shadow-xl lg:px-8 lg:rounded-xl lg:py-7 lg:w-96">
              <div className="flex flex-col space-y-2">
                <label className="text-lg text-left lg:text-xl">Email</label>
                <input
                  type="email"
                  placeholder="mail@mailer.com"
                  className="border border-grey rounded-lg px-5 py-2 focus:outline-none focus:border-secondary"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-lg text-left lg:text-xl">Password</ label>
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-grey rounded-lg px-5 py-2 focus:outline-none focus:border-secondary"
                />
              </div>
              <button className="font-bold bg-primary text-white py-2 rounded-lg ">
                Log in
              </button>
              <p className="text-center text-primary">
                Don't have an account?{" "}
                <NavLink to="/signup" className="text-red-600 underline">
                  Sign Up
                </NavLink>
              </p>
            </form>
          </div>
        </section>
      </>
    );
};

export default Login;
