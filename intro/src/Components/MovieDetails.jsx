import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { CiStreamOn } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState("hidden");
  const [isopen, setIsOpen] = useState(false);
  const convertRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Nzg3YTczZjYzNTU3ODk4ZTNhOTY4YTVlZGZiNzRlNyIsInN1YiI6IjY1NDM5YzVhZTFhZDc5MDE0YmQyMWE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSIgoMq6Zynrqibem6qqAMhJuchH5CmDPuLp7I5sd7k",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setMovies(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div>
      <Navbar />
      {loading && (
        <>
          <div className="flex flex-col animate-spin h-screen justify-center items-center space-y-2">
            <figure className="flex space-x-2">
              <div className="w-4 h-4 bg-green-800 animate-pulse rounded-full"></div>
              <div className="w-4 h-4 bg-green-800 rounded-full"></div>
            </figure>
            <figure className="flex space-x-2">
              <div className="w-4 h-4 bg-green-800 animate-pulse rounded-full"></div>
              <div className="w-4 h-4 bg-green-800 rounded-full"></div>
            </figure>
          </div>
        </>
      )}

      {movies && movies.poster_path && (
        <section className="container mx-auto">
          <figure className="flex flex-col h-screen w-full space-y-5 py-7 px-4 md:px-7 lg:px-10">
            <div className="w-full" key={movies.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
                alt={`${movies.title}`}
                className="rounded-xl w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center space-x-5">
                <h1 className="text-black font-bold text-xl text-center py-2 md:text-2xl">
                  {movies.title}
                </h1>
              </div>
              <div className="flex space-x-10 items-center">
                <div className="flex space-x-2 w-full">
                  <button className="bg-primary flex justify-center space-x-2 items-center w-full px-2 py-3 rounded-lg text-white">
                    <p className="text-white">Stream</p>
                    <CiStreamOn style={{ color: "#FE9D00" }} />
                  </button>
                  <button className="bg-primary flex justify-center space-x-2 items-center w-full px-2 py-3 rounded-lg text-white">
                    <p className="text-white">Download</p>
                    <FaDownload style={{ color: "#FE9D00" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-black text-lg font-bold md:text-xl">
                Movie Info
              </p>
              <p className="text-black text-sm md:text-md">{movies.overview}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <p className="text-black text-sm font-semibold md:text-lg">
                  Status:
                </p>
                <p className="text-xs md:text-md">{movies.status}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-black text-sm font-semibold md:text-lg">
                  Release Date:
                </p>
                <p className="text-xs md:text-md">{movies.release_date}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-black text-sm font-semibold md:text-lg">
                  Runtime:
                </p>
                <p className="text-xs md:text-md">
                  {movies.runtime && convertRuntime(movies.runtime)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-black text-sm font-semibold md:text-lg">
                  Ratings:
                </p>
                <p className="text-xs md:text-md">{movies.vote_average}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-black text-sm font-semibold md:text-lg">
                  Genres:
                </p>
                <p className="text-xs md:text-md">
                  {movies.genres.map((genre) => (
                    <span key={genre.id}>
                      {genre.name} {genre !== genre.length - 1 ? " | " : ""}{" "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-black text-sm font-semibold md:text-lg">
                  Production Co:
                </p>
                <p className="text-xs md:text-md">
                  {movies.production_companies.map((genre) => (
                    <span key={genre.id}>
                      {genre.name} {genre !== genre.length - 1 ? " | " : ""}{" "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </figure>
        </section>
      )}
    </div>
  );
};

export default MovieDetails;
