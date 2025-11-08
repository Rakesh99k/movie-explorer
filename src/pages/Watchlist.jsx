import React, { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';


function Watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div
      style={{
        padding: '2rem',
        background: '#000',
        borderRadius: '24px',
        boxShadow: '0 0 32px #00f6ff44',
        color: '#00f6ff',
        maxWidth: '900px',
        margin: '2rem auto',
      }}
    >
      <h2 style={{ color: '#00f6ff', textShadow: '0 0 16px #00f6ff' }}>📺 Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p style={{ color: '#fff', textShadow: '0 0 8px #00f6ff' }}>No movies added yet!</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {watchlist.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              date={movie.release_date}
              id={movie.id}
              isAdded={true}
              onRemove={() => removeFromWatchlist(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
