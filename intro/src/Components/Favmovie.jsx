import React from 'react'
import { useNavigate } from "react-router-dom";

const Favmovie = ({ fmovie }) => {
    const navigate = useNavigate();
  return (
    <>
      <section className="container mt-10 mx-auto px-4">
        <div className="flex flex-col space-y-4">
          <div className="flex">
            <p className="text-xl font-semibold">Upcoming Movies</p>
          </div>
          <div className="grid mt-10 gap-10 grids-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {fmovie.map((result) => (
              <div
                key={result.id}
                className="h-96 rounded-xl shadow-lg"
                onClick={() => {
                  navigate(`/MovieDetails/${result.id}`);
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt=""
                  className="w-full h-80 object-cover"
                />
                <p className="text-lg mt-4 ml-4 line-clamp-1 font-medium">
                  {result.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Favmovie