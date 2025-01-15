import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="bg-primary text-white h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-lg font-semibold">Contact Us</p>
        </div>

        <div className="flex flex-col gap-5 items-center text-center py-10 px-10 xl:px-72">
          <h1 className="xl:text-[50px] text-[45px] font-bold">Get In Touch</h1>
          <p className="text-lg tracking-widest">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you!
          </p>
          <Link to="mailto:actomaniaaquila@gmail.com">
            <button className="border border-secondary font-semibold px-4 text-sm text-white py-2 rounded-md shadow-lg hover:bg-secondary hover:text-white transition-all duration-300">
              Say Hello
            </button>
          </Link>
        </div>
        <div className="text-white text-center">
          <h2 className="text-2xl font-medium pb-3">Follow Us</h2>
          <div className="flex items-center justify-center space-x-4">
            <Link
              to="https://www.facebook.com/profile.php?id=100093481572769"
              className="text-2xl"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.youtube.com/@A.R.Mvisuals"
              className="text-2xl"
            >
              <FaYoutube />
            </Link>
            <Link
              to="https://www.instagram.com/actomania_films?igsh=MW11NTBsaDlyZHZreQ=="
              className="text-2xl"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
