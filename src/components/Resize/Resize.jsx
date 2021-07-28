import React, { useEffect, useState } from 'react';

const Resize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h2>The current window size is : </h2>
      <h1>
        {windowHeight} X {windowWidth}
      </h1>
    </div>
  );
};

export default Resize;
