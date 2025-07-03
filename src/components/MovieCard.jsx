import React from 'react';

function MovieCard({ title, poster, date, onAdd, isAdded }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '1rem',
      borderRadius: '8px',
      width: '200px',
      margin: '1rem'
    }}>
      <img 
        src={poster} 
        alt={title} 
        style={{ width: '100%', borderRadius: '4px' }} 
      />
      <h3>{title}</h3>
      <p>Release Date: {date}</p>
      <button onClick={onAdd}
  disabled={isAdded}>
  {isAdded ? "Added ✅" : "Add to Watchlist"}</button>
    </div>
  );
}

export default MovieCard;
