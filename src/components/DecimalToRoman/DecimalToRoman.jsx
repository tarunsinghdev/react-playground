import React, { useState } from 'react';

const DecimalToRoman = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const decToRoman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let roman = '';
    let i = 12;
    let number = parseInt(inputText);
    while (number) {
      let div = Math.floor(number / Object.keys(decToRoman)[i]);
      number = number % Object.keys(decToRoman)[i];
      while (div--) {
        roman += decToRoman[Object.keys(decToRoman)[i]];
      }
      i--;
    }
    setInputText('');
    setResult(roman);
  };

  return (
    <div>
      <h3>Convert Decimal to Roman Numeral</h3>
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

export default DecimalToRoman;
