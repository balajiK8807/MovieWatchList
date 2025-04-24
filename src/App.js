import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./Components/Headers";
import Footer from "./Components/Footer";
import MoviesGrid from "./Components/MoviesGrid";
import WatchList from "./Components/WatchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/watchlist">Watchlist</a>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
