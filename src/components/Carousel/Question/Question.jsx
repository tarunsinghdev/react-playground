import React from 'react';

const Question = () => {
  return (
    <div>
      <ul>
        <li>Fetch images from an API and truncate it to 10 images</li>
        <li>Render a slider-step to keep track of the slides </li>
        <li>
          On clicking the image, the slider should start moving at an interval
          of 5 seconds, clicking on the image back stops the cycle.
        </li>
        <li>Slides change should be done in circular fashion.</li>
        <li>Previous and Next button to change the slide manually.</li>
      </ul>
    </div>
  );
};

export default Question;
