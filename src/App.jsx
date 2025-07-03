import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';


function App(){
  const [watchlist, setWatchlist] = useState([]);
  const [movies, setMovies] = useState([]);

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

const addToWacthlist = (movie) => {
  if(!watchlist.find(item => item.id === movie.id)){
    setWatchlist([...watchlist,movie]);
  }
}

  return (
  <div>
    <Navbar />
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
    </Routes>
  </div>
);

}

export default App;