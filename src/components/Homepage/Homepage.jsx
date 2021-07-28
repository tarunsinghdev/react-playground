import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <h1>React Playground</h1>
      <ol>
        <li>
          <Link to="/example/1">Window Resize</Link>
        </li>
        <li>
          <Link to="/example/2">React hooks usage</Link>
        </li>
      </ol>
    </>
  );
};

export default Homepage;
