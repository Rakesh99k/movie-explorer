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
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div className="neon-loader" style={{ margin: '2rem auto' }}></div>
        <p style={{ color: '#00f6ff', textShadow: '0 0 8px #00f6ff', marginTop: '1rem' }}>Loading movie details...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, #000 70%, #00f6ff22 100%)',
        borderRadius: '24px',
        boxShadow: '0 0 32px #00f6ff44',
        color: '#00f6ff',
        maxWidth: '600px',
        margin: '2rem auto',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#00f6ff', textShadow: '0 0 8px #00f6ff', fontWeight: 'bold', fontSize: '1.1rem' }}>
        ⬅️ Back to Home
      </Link>
      <h2 style={{ marginTop: '1rem', color: '#00f6ff', textShadow: '0 0 16px #00f6ff' }}>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '300px', borderRadius: '16px', boxShadow: '0 0 24px #00f6ff88', border: '2px solid #00f6ff', margin: '1rem 0' }}
      />
      <p style={{ fontWeight: 'bold', fontSize: '1.1em', margin: '0.5rem 0' }}>
        Release Date: <span style={{ color: '#fff', textShadow: '0 0 8px #00f6ff' }}>{movie.release_date}</span>
      </p>
      <p style={{ fontWeight: 'bold', fontSize: '1.1em', margin: '0.5rem 0' }}>
        Rating: <span style={{ color: '#fff', textShadow: '0 0 8px #00f6ff' }}>⭐ {movie.vote_average}</span>
      </p>
      <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>Overview:</p>
      <p style={{ color: '#fff', textShadow: '0 0 8px #00f6ff', marginBottom: '0' }}>{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
