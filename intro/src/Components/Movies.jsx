import React from 'react'
import MovieCard from './MovieCard'

const Movies = ({searchResult}) => {
  return (
    <>
     <section className="container mt-10 mx-auto px-4">
        <div className="flex flex-col space-y-4">
            <div className="flex">
                <p className="text-xl font-semibold">Discover Movies</p>
            </div>
            <div className="grid mt-10 gap-10 grids-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <MovieCard searchResult={searchResult}/>
            </div>
        </div>
     </section>
    </>
  )
}

export default Movies