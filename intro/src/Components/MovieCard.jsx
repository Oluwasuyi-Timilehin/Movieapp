import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ searchResult }) => {
  const navigate = useNavigate();
  return (
    <>
      {searchResult.map((movie) => (
        <div
          key={movie.id}
          className="h-96 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => {
            navigate(`/MovieDetails/${movie.id}`);
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title} poster`}
            className="w-full h-80 object-cover rounded-t-xl"
          />
          <p className="text-lg mt-4 ml-4 line-clamp-1 font-medium">
            {movie.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
