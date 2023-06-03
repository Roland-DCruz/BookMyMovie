import React from 'react';

function MovieSummary({ summary }) {
  return <div dangerouslySetInnerHTML={{ __html: summary }} />;
}

export default MovieSummary;
