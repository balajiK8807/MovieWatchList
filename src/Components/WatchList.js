import React from "react";
import "../styles.css";
import MoviesCard from "./MoviesCard";

export default function WatchList({ movies, toggleWatchList, watchList }) {
  console.log(movies);
  console.log(watchList);
  return (
    <div>
      <h1 className="title">Your WatchList</h1>
      <div className="watchlist">
        {watchList.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MoviesCard
              key={id}
              movie={movie}
              toggleWatchList={toggleWatchList}
              isWatchlist={true}
            ></MoviesCard>
          );
        })}
      </div>
    </div>
  );
}
