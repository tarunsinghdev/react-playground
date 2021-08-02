import React, { useCallback, useEffect, useRef, useState } from 'react';

import './InfiniteScroll.css';

const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const elRef = useRef([]);

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random/3');
      const res = await response.json();
      setImages((prevImages) => [...prevImages, ...res.message]);
    } catch (error) {
      console.log('Failed to fetch, Something went wrong.');
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry.target);
      });
    };
    elRef.current = elRef.current.slice(0, 3);
    console.log('From effect', elRef);

    const options = { root: null, threshold: 1, rootMargin: '-15px' };
    const observer = new IntersectionObserver(callback, options);
    // if (elRef.current) {
    elRef.current.forEach((el) => observer.observe(el));
    // }
  }, [images]);

  return (
    <div>
      {images.map((image, i) => (
        <img
          ref={(el) => (elRef.current[i] = el)}
          key={i}
          src={image}
          alt={i}
        />
      ))}
    </div>
  );
};

export default InfiniteScroll;
