import React, { useState } from 'react';

import './FourQuandrant.css';

const FourQuandrant = () => {
  const [styles, setStyles] = useState([
    { color: 'red', isClicked: false },
    { color: 'blue', isClicked: false },
    { color: 'green', isClicked: false },
    { color: 'yellow', isClicked: false },
  ]);

  const clickHandler = (id) => {
    const changedStyles = styles.map((s, i) =>
      i === id ? { ...s, isClicked: !s.isClicked } : { ...s, isClicked: false }
    );
    setStyles(changedStyles);
  };

  return (
    <div className="fourquadrant">
      {styles.map((s, i) => (
        <div
          key={i}
          className="box"
          style={{ backgroundColor: s.color, width: 100, height: 100 }}
          onClick={() => clickHandler(i)}
        >
          {s.isClicked && 'Clicked!'}
        </div>
      ))}
    </div>
  );
};

export default FourQuandrant;
