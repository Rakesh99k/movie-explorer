import React, { useState, useEffect, useContext } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import { WatchlistContext } from './context/WatchlistContext';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import Watchlist from './pages/Watchlist';


function App(){
  const [movies, setMovies] = useState([]);
  const { watchlist, addToWatchlist } = useContext(WatchlistContext);


  useEffect(() => {
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e7116186d9e4678ab5b7d05255356e63`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  fetchMovies();
}, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {movies.map(movie => (
                <MovieCard 
                  key={movie.id}
                  title={movie.title}
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  date={movie.release_date}
                  onAdd={() => addToWatchlist(movie)}
                  isAdded={watchlist.find(item => item.id === movie.id)}
                  id={movie.id}
                />
              ))}
            </div>
          } />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
      <footer className="footer">
        <span>Made with 💙 Neon by Movie Explorer</span>
        <span style={{ marginLeft: '1em' }}>
          <a href="https://github.com/Rakesh99k/movie-explorer" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa fa-github" aria-hidden="true"></i> GitHub
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fa fa-twitter" aria-hidden="true"></i> Twitter
          </a>
        </span>
      </footer>
    </div>
  );

}

export default App;