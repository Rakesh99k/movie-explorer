import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=e7116186d9e4678ab5b7d05255356e63`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p style={{ padding: '2rem' }}>Loading movie details...</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>⬅️ Back to Home</Link>
      <h2>{movie.title}</h2>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title}
        style={{ width: '300px', borderRadius: '8px' }} 
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
      <p><strong>Overview:</strong></p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
