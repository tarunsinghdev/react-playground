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
        <li>
          <Link to="/example/3">
            Infinite Scroll with Intersection Observer API
          </Link>
          <strong>(🚧pending🚧)</strong>
        </li>
        <li>
          <Link to="/example/4">Design a Carousel</Link>
        </li>
        <li>
          <Link to="/example/5">Google Timer Clone</Link>
        </li>
        <li>
          <Link to="/example/6">Input Validation</Link>
        </li>
        <li>
          <Link to="/example/7">Design Microsoft logo</Link>
        </li>
        <li>
          <Link to="/example/8">Convert Roman Numeral to Decimal</Link>
        </li>
        <li>
          <Link to="/example/9">Convert Decimal to Roman Numeral</Link>
        </li>
      </ol>
    </>
  );
};

export default Homepage;
