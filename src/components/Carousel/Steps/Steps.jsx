import React from 'react';

import './Steps.css';

const Steps = ({ length, cnt }) => {
  return (
    <div className="step">
      {[...Array(length).keys()].map((c) => (
        <span className={c <= cnt ? 'step__dot active' : 'step__dot'}></span>
      ))}
    </div>
  );
};

export default Steps;
