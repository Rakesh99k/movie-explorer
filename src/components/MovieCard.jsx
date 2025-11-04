import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ title, poster, date, onAdd, onRemove, isAdded, id }) {
  return (
    <div
      className="card"
      style={{
        width: '220px',
        margin: '1.2rem',
        textAlign: 'center',
        position: 'relative',
        transition: 'box-shadow 0.2s',
      }}
    >
      <Link
        to={`/movie/${id}`}
        style={{
          textDecoration: 'none',
          color: '#00f6ff',
          textShadow: '0 0 8px #00f6ff',
        }}
      >
        <img
          src={poster}
          alt={title}
          style={{
            width: '100%',
            borderRadius: '8px',
            marginBottom: '0.7rem',
            boxShadow: '0 0 16px #00f6ff88',
            border: '2px solid #00f6ff',
          }}
        />
        <h3 style={{ margin: '0.5rem 0', color: '#00f6ff', textShadow: '0 0 12px #00f6ff' }}>{title}</h3>
        <p style={{ margin: '0.5rem 0', color: '#00f6ff', fontSize: '0.95em', textShadow: '0 0 8px #00f6ff' }}>
          Release Date: {date}
        </p>
      </Link>

      {/* Add to Watchlist button */}
      {onAdd && (
        <button
          onClick={onAdd}
          disabled={isAdded}
          style={{
            padding: '0.5rem 0.8rem',
            backgroundColor: isAdded ? '#222' : '#00f6ff',
            color: isAdded ? '#888' : '#000',
            border: '2px solid #00f6ff',
            borderRadius: '8px',
            cursor: isAdded ? 'not-allowed' : 'pointer',
            marginTop: '0.5rem',
            boxShadow: isAdded ? 'none' : '0 0 12px #00f6ff',
            fontWeight: 'bold',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          {isAdded ? 'Added ✅' : 'Add to Watchlist'}
        </button>
      )}

      {/* Remove from Watchlist button */}
      {onRemove && (
        <button
          onClick={onRemove}
          style={{
            padding: '0.5rem 0.8rem',
            backgroundColor: '#000',
            color: '#00f6ff',
            border: '2px solid #00f6ff',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '0.5rem',
            marginLeft: '0.5rem',
            boxShadow: '0 0 12px #00f6ff44',
            fontWeight: 'bold',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseOver={e => {
            e.target.style.background = '#00f6ff';
            e.target.style.color = '#000';
          }}
          onMouseOut={e => {
            e.target.style.background = '#000';
            e.target.style.color = '#00f6ff';
          }}
        >
          Remove ❌
        </button>
      )}
    </div>
  );
}

export default MovieCard;
