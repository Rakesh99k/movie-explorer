import React, { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';


function Watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📺 Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies added yet!</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
