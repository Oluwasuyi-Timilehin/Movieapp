import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import MovieDetails from "../Components/MovieDetails";
import Topratedpage from "../Pages/Topratedpage";
import Blog from "../Pages/Blog";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Contact from "../Components/Contact";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/topratedpage" element={<Topratedpage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
