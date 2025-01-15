import React, { useEffect, useState } from "react";
import Tophero from '../Components/Tophero'
import Navbar from '../Components/Navbar'
import Topmovie from '../Components/Topmovie';

const Topratedpage = () => {

    const [tmovie, setTmovie] = useState([]);

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
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setTmovie(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    TopRatedMovies();
  }, []);
   
  return (
    <>
      <Navbar />
      <Tophero />
      <Topmovie tmovie={tmovie} />
    </>
  );
}

export default Topratedpage