import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Favhero from "../Components/Favhero";
import Favmovie from "../Components/Favmovie";

const Favouritepage = () => {
  const [fmovie, setFmovie] = useState([]);

  useEffect(() => {
    const TopRatedMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Nzg3YTczZjYzNTU3ODk4ZTNhOTY4YTVlZGZiNzRlNyIsInN1YiI6IjY1NDM5YzVhZTFhZDc5MDE0YmQyMWE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSIgoMq6Zynrqibem6qqAMhJuchH5CmDPuLp7I5sd7k",
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setFmovie(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    TopRatedMovies();
  }, []);

  return (
    <>
      <Navbar />
      <Favhero />
      <Favmovie fmovie={fmovie} />
    </>
  );
};

export default Favouritepage;
