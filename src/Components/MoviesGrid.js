import React, { useEffect, useState } from "react";
import "../styles.css";
import MoviesCard from "./MoviesCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="search movies.."
        className="search-input"
      />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MoviesCard movie={movie} key={movie.id}></MoviesCard>
        ))}
      </div>
    </div>
  );
}
