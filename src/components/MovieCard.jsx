import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ title, poster, date, onAdd, onRemove, isAdded, id }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '1rem',
      borderRadius: '8px',
      width: '200px',
      margin: '1rem',
      backgroundColor: '#f5f5f5',
      textAlign: 'center'
    }}>
      <Link to={`/movie/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img 
          src={poster} 
          alt={title}
          style={{ width: '100%', borderRadius: '4px', marginBottom: '0.5rem' }} 
        />
        <h3 style={{ margin: '0.5rem 0' }}>{title}</h3>
        <p style={{ margin: '0.5rem 0', color: '#555' }}>Release Date: {date}</p>
      </Link>

      {/* Add to Watchlist button */}
      {onAdd && (
        <button 
          onClick={onAdd} 
          disabled={isAdded}
          style={{
            padding: '0.5rem 0.8rem',
            backgroundColor: isAdded ? 'gray' : '#0a0a23',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isAdded ? 'not-allowed' : 'pointer',
            marginTop: '0.5rem'
          }}
        >
          {isAdded ? "Added ✅" : "Add to Watchlist"}
        </button>
      )}

      {/* Remove from Watchlist button */}
      {onRemove && (
        <button 
          onClick={onRemove}
          style={{
            padding: '0.5rem 0.8rem',
            backgroundColor: 'crimson',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '0.5rem',
            marginLeft: '0.5rem'
          }}
        >
          Remove ❌
        </button>
      )}
    </div>
  );
}

export default MovieCard;
