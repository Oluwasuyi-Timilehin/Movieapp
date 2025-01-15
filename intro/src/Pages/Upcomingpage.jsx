import React, { useEffect, useState } from "react";
import Uphero from "../Components/Uphero"
import Navbar from "../Components/Navbar";
import Upmovie from "../Components/Upmovie"


const Upcomingpage = () => {
  const [Umovie, setUmovie] = useState([]);

  useEffect(() => {
    const UpcomingMovies = async () => {
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
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setUmovie(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    UpcomingMovies();
  }, []);

  return (
    <>
          <Navbar />
          <Uphero/>
      <Upmovie Umovie={Umovie} />
    </>
  );
};

export default Upcomingpage;