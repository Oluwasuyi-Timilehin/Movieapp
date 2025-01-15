import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import SearchBar from "../Components/SearchBar";
import Movies from "../Components/Movies";

const Homepage = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([{}]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Nzg3YTczZjYzNTU3ODk4ZTNhOTY4YTVlZGZiNzRlNyIsInN1YiI6IjY1NDM5YzVhZTFhZDc5MDE0YmQyMWE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSIgoMq6Zynrqibem6qqAMhJuchH5CmDPuLp7I5sd7k",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSearchResult(response.results))
      .catch((err) => console.error(err));
  }, [query]);

  console.log(searchResult);
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar setQuery={setQuery} />
      <Movies searchResult={searchResult} />
    </>
  );
};

export default Homepage;