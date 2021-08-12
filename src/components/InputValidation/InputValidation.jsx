import React, { useState } from 'react';

import './InputValidation.css';

const InputValidation = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const nameValidator = () => {
    if (!name.length) {
      alert("Name field can't be empty");
      return;
    }
    if (name.length < 100) {
      alert('Name must be less than 100 characters');
    }
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const ageValidator = () => {
    if (parseInt(age) > 99 || parseInt(age) < 18) {
      alert('Age must be between 18-99');
    }
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailValidator = () => {
    const regex = /^[a-z0-9]*\b@\b[a-z]*\b.\b[a-z]*$/;
    if (!regex.test(email)) {
      alert('Please enter a valid email');
    }
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const passwordValidator = () => {
    if (password.length < 8) {
      alert('Password must be atleast 8 characters long');
    }
  };

  const resetChangeHandler = (e) => {
    setResetPassword(e.target.value);
  };

  const resetValidator = () => {
    if (resetPassword !== password) {
      alert('Password do not match');
    }
  };

  return (
    <div className="inputvalidation">
      <h2>Input validation using React</h2>
      <label>Enter Name</label>
      <input onBlur={nameValidator} type="text" onChange={nameChangeHandler} />
      <p>
        <label>Enter age</label>
      </p>
      <input onBlur={ageValidator} type="number" onChange={ageChangeHandler} />
      <p>
        <label>Email</label>
      </p>
      <input
        onBlur={emailValidator}
        type="email"
        onChange={emailChangeHandler}
      />
      <p>
        <label>Password</label>
      </p>
      <input
        onBlur={passwordValidator}
        type="text"
        onChange={passwordChangeHandler}
      />
      <p>
        <label>Re-enter Password</label>
      </p>
      <input
        onBlur={resetValidator}
        type="text"
        onChange={resetChangeHandler}
      />
    </div>
  );
};

export default InputValidation;
