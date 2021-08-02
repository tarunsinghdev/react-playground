import React, { useEffect, useState } from 'react';

import './Carousel.css';
import Question from './Question/Question';
import Steps from './Steps/Steps';

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://picsum.photos/v2/list');
      const res = await response.json();
      setImages(res.slice(0, 10));
    };
    fetchImages();
  }, []);

  const onNextHandler = () => {
    if (count + 1 === images.length) {
      setCount(0);
      return;
    }
    setCount((prevCount) => prevCount + 1);
  };

  const onPrevHandler = () => {
    if (count === 0) {
      setCount(images.length - 1);
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };

  const startStopTimerInterval = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
      return;
    }
    const storeTimerId = setInterval(() => onNextHandler(), 5000);
    setTimerId(storeTimerId);
  };

  return (
    <div className="carousel">
      <Steps length={images.length} cnt={count} />
      <div className="carousel__container">
        <button className="carousel__prev" onClick={onPrevHandler}>
          {`<`}
        </button>
        <img
          onClick={startStopTimerInterval}
          src={images[count]?.download_url}
          alt={images[count]?.id}
        />
        <button className="carousel__next" onClick={onNextHandler}>
          {`>`}
        </button>
      </div>
      <Question />
    </div>
  );
};

export default Carousel;
