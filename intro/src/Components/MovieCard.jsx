import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ searchResult }) => {
  const navigate = useNavigate();

  return (
    <>
      {searchResult.map((movie, index) => {
        const movieId = movie.id || `fallback-${index}`; // Fallback if `id` is missing

        return (
          <div
            key={movieId} // Ensure a unique key for React
            className="h-96 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => {
              if (movie.id) {
                navigate(`/MovieDetails/${movie.id}`);
              } else {
                console.warn("Missing movie ID, cannot navigate:", movie);
              }
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title || "Movie"} poster`}
              className="w-full h-80 object-cover rounded-t-xl"
            />
            <p className="text-lg mt-4 ml-4 line-clamp-1 font-medium">
              {movie.title || "Untitled Movie"}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default MovieCard;
