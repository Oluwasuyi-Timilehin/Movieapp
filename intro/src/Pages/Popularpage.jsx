import React, { useEffect, useState } from "react";
import Popmovie from "../Components/Popmovie";
import Navbar from "../Components/Navbar";
import Pophero from "../Components/Pophero";

const Popularpage = () => {
  const [Pmovie, setPmovie] = useState([]);

  useEffect(() => {
    const PopularMovies = async () => {

      // Fetching the popular movies from the TMDB API
      // The API key and options for the request are defined here.
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Nzg3YTczZjYzNTU3ODk4ZTNhOTY4YTVlZGZiNzRlNyIsIm5iZiI6MTY5ODkyOTc1NC4yNjcsInN1YiI6IjY1NDM5YzVhZTFhZDc5MDE0YmQyMWE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vhHC9JBrADpk9_5J3LzqRchpXgXopQCgDxqoQ2CqQ1w",
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setPmovie(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    PopularMovies();
  }, []);

  return (
    <>
      <Navbar />
      <Pophero />
      <Popmovie Pmovie={Pmovie} />
    </>
  );
};

export default Popularpage;
