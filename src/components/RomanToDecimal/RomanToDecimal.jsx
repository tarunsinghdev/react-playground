import React, { useState } from 'react';

const RomanToDecimal = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const romanToDec = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let dec = 0;
    for (let i = 0; i < inputText.length; i++) {
      if (i + 1 < inputText.length) {
        if (romanToDec[inputText[i]] >= romanToDec[inputText[i + 1]]) {
          dec += romanToDec[inputText[i]];
        } else {
          dec = dec - romanToDec[inputText[i]] + romanToDec[inputText[i + 1]];
          i++;
        }
      } else {
        dec = dec + romanToDec[inputText[i]];
      }
    }
    setResult(dec);
    setInputText('');
  };

  return (
    <div>
      <h3>Convert Roman Numeral to Decimal</h3>
      <form onSubmit={submitHandler}>
        <input
          value={inputText}
          type="text"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      <h4>{result}</h4>
    </div>
  );
};

export default RomanToDecimal;
