import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { CiStreamOn } from "react-icons/ci";
import Navbar from "./Navbar";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        );
        const data = await response.json();
        setMovie(data);

        const videoResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        const videoData = await videoResponse.json();
        setVideos(
          videoData.results.filter((video) => video.site === "YouTube")
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <Navbar />
      {loading ? (
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
      ) : (
        <section className="container mx-auto">
          <figure className="flex flex-col h-screen w-full space-y-5 py-7 px-4 md:px-7 lg:px-10">
            <div className="w-full">
              {videos.length > 0 ? (
                <iframe
                  className="w-full h-80 md:h-[600px] rounded-xl"
                  src={`https://www.youtube.com/embed/${videos[0].key}`}
                  title={videos[0].name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ></iframe>
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={`${movie.title}`}
                  className="rounded-xl w-full object-cover"
                />
              )}
            </div>
            <div className="flex flex-col">
              <h1 className="text-black font-bold text-xl text-center py-2 md:text-2xl">
                {movie.title}
              </h1>
              <div className="flex space-x-10 items-center">
                <button className="bg-primary flex justify-center space-x-2 items-center w-full px-2 py-3 rounded-lg text-white">
                  <p className="text-white">Stream</p>
                  <CiStreamOn style={{ color: "#068c7c" }} />
                </button>
                <button className="bg-primary flex justify-center space-x-2 items-center w-full px-2 py-3 rounded-lg text-white">
                  <p className="text-white">Download</p>
                  <FaDownload style={{ color: "#068c7c" }} />
                </button>
              </div>
            </div>
            <div className="flex lg:space-x-10 pb-10">
              
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt=""
                  className="rounded-md object-cover hidden lg:"
                />
              

              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-black text-lg font-bold md:text-xl">
                    Movie Info
                  </p>
                  <p className="text-black text-sm md:text-md">
                    {movie.overview}
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-black text-sm font-semibold md:text-lg">
                    Release Date: {movie.release_date}
                  </p>
                  <p className="text-black text-sm font-semibold md:text-lg">
                    Runtime: {convertRuntime(movie.runtime)}
                  </p>
                  <p className="text-black text-sm font-semibold md:text-lg">
                    Ratings: {movie.vote_average}
                  </p>
                </div>
              </div>
            </div>
          </figure>
        </section>
      )}
    </div>
  );
};

export default MovieDetails;
