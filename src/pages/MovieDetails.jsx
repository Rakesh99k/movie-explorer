import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Movie Details for ID: {id}</h2>
      <p>We'll fetch and show details for this movie later!</p>
    </div>
  );
}

export default MovieDetails;
