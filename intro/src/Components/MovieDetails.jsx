import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const MovieDetails = () => {
 const { id } = useParams();
 const [movie, setMovie] = useState({});
 const [cast, setCast] = useState([]);
 const [trailerKey, setTrailerKey] = useState("");
 const [showTrailer, setShowTrailer] = useState(false);
 const [loading, setLoading] = useState(true);
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Nzg3YTczZjYzNTU3ODk4ZTNhOTY4YTVlZGZiNzRlNyIsIm5iZiI6MTY5ODkyOTc1NC4yNjcsInN1YiI6IjY1NDM5YzVhZTFhZDc5MDE0YmQyMWE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vhHC9JBrADpk9_5J3LzqRchpXgXopQCgDxqoQ2CqQ1w"; // Replace this with your API key

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

   useEffect(() => {
     const fetchMovieDetails = async () => {
       try {
         const response = await fetch(
           `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
           options
         );
         const movieData = await response.json();
         setMovie(movieData);

         const castResponse = await fetch(
           `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
           options
         );
         const castData = await castResponse.json();
         setCast(castData.cast.slice(0, 6)); // Display top 6 cast members

         const trailerResponse = await fetch(
           `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
           options
         );
         const trailerData = await trailerResponse.json();
         const trailer = trailerData.results.find(
           (video) => video.type === "Trailer" && video.site === "YouTube"
         );
         setTrailerKey(trailer ? trailer.key : "");
         setLoading(false);
       } catch (error) {
         console.error("Error fetching movie data:", error);
       }
     };

     fetchMovieDetails();
   }, [id]);

   if (loading) {
     return (
       <div className="flex justify-center items-center h-screen">
         <div className="loader">Loading...</div>
       </div>
     );
   }

  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col md:flex-row text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.5) 100%), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex flex-col py-5 lg:flex-row lg:space-x-10">
          {/* Left Section - Poster */}
          <div className="flex p-6">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "300px",
                height: "450px",
                borderRadius: "15px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right Section - Details */}
          <div className="md:w-2/3 p-6 flex flex-col space-y-10">
            <div className="flex flex-col">
              <h1 className="text-4xl space-y-2 font-bold">
                {movie.title}{" "}
                {movie.release_date
                  ? `(${new Date(movie.release_date).getFullYear()})`
                  : ""}
              </h1>
              <p className="flex flex-col space-y-1 lg:flex-row">
                <span className="text-center text-sm border border-gray-400 h-7 w-7 flex justify-center items-center rounded-sm font-semibold text-gray-500 mr-2">
                  {movie.certification || "PG"}
                </span>
                <span className="mr-2">
                  {movie.release_date
                    ? new Date(movie.release_date).toLocaleDateString("en-US")
                    : "Unknown"}{" "}
                  (US)
                </span>
                <span className="mr-2">
                  {movie.genres
                    ? movie.genres.map((genre) => genre.name).join(", ")
                    : "No genres available"}
                </span>
                <span className="">
                  {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                </span>
              </p>
            </div>
            <div className="flex items-center gap-5">
              {/* Action Buttons */}
              <div className="flex  items-center space-x-6">
                <div className="relative group">
                  {/* Button */}
                  <button className="text-white text-xl bg-primary h-12 w-12 rounded-full flex items-center justify-center">
                    ☰
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs py-1 px-1 rounded-md shadow-md w-20 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 flex items-center justify-center">
                    Add to List
                  </div>
                </div>

                <div className="relative group">
                  {/* Button */}
                  <button className="text-white text-xl bg-primary h-12 w-12 rounded-full flex items-center justify-center">
                    ♥
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs py-1 px-1 rounded-md shadow-md w-32 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 flex items-center justify-center">
                    Mark as favorite
                  </div>
                </div>

                <div className="relative group">
                  {/* Button */}
                  <button className="text-white text-xl bg-primary h-12 w-12 rounded-full flex items-center justify-center">
                    🔖
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs py-1 px-1 rounded-md shadow-md w-40 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 flex items-center justify-center">
                    Add to your watchlist
                  </div>
                </div>

                <button
                  className="text-white text-xl flex items-center hover:text-gray-400"
                  onClick={() => setShowTrailer(true)}
                >
                  ▶ <span className="ml-1 text-sm">Play Trailer</span>
                </button>
              </div>
            </div>

            <p className="text-lg space-y-2">
              <strong>Overview:</strong>
              <p>{movie.overview}</p>
            </p>
            <p className="text-lg">
              <strong>Rating:</strong> {movie.vote_average} / 10
            </p>
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && trailerKey && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setShowTrailer(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Cast Section */}
      <div className="container mx-auto p-6">
        <h2 className="text-2xl text-black font-semibold mb-4">
          Top Billed Cast
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cast.map((actor) => (
            <div
              key={actor.id}
              className="shadow-2xl border border-gray-300 rounded-lg"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className="object-contain"
              />
              <div className="px-3 py-2">
                <p className="text-gray-700 mt-2 font-semibold">{actor.name}</p>
                <p className="text-gray-500 text-sm">{actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
