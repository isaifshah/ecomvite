import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFound;