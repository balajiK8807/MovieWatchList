import React, { useState } from "react";
import "../styles.css";
import MoviesCard from "./MoviesCard";

export default function MoviesGrid({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All Ratings");

  const onHandleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const onHandleGenre = (e) => {
    setGenre(e.target.value);
  };

  const onHandleRating = (e) => {
    setRating(e.target.value);
  };

  const matchGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchRating = (movie, rating) => {
    switch (rating) {
      case "All Ratings":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const matchSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchGenre(movie, genre) &&
      matchRating(movie, rating) &&
      matchSearchTerm(movie, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="search movies.."
        className="search-input"
        value={searchTerm}
        onChange={onHandleSearch}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>

          <select
            className="filter-dropdown"
            value={genre}
            onChange={onHandleGenre}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot" value={rating} onChange={onHandleRating}>
          <label>Rating</label>
          <select className="filter-dropdown">
            <option>All Ratings</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MoviesCard movie={movie} key={movie.id}></MoviesCard>
        ))}
      </div>
    </div>
  );
}
