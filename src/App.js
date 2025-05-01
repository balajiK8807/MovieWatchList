import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./Components/Headers";
import Footer from "./Components/Footer";
import MoviesGrid from "./Components/MoviesGrid";
import WatchList from "./Components/WatchList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchList = (movieId) => {
    console.log("Toggling watchlist for movie ID:", movieId);
    console.log("Current watchlist:", watchList);
    setWatchList((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
    console.log("Updated watchlist:", watchList);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchList">WatchList</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                  watchList={watchList}
                />
              }
            />
            <Route
              path="/watchList"
              element={
                <WatchList
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                  watchList={watchList}
                />
              }
            />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
