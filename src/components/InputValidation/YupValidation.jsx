import React, { useState } from 'react';
import * as Yup from 'yup';

const schema = Yup.object({
  name: Yup.string().required("Name can't be empty").min(100),
  age: Yup.string()
    .min(17, 'Age must be between 18-99')
    .max(100, 'Age must be between 18-99'),
  email: Yup.string()
    .required('Email cannot be empty')
    .email('Enter a valid email'),
  password: Yup.string()
    .required()
    .min(8, 'Password must be atleast 8 characters long'),
  resetPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password do not match'
  ),
});

const YupValidation = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState('');

  const validator = () => {
    schema
      .validate({ name, age, email, password, resetPassword })
      .then(console.log('Hurray'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="inputvalidation">
      <h2>Input validation using Yup Library</h2>
      <label>Enter Name</label>
      <input
        onBlur={validator}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        <label>Enter age</label>
      </p>
      <input
        onBlur={validator}
        type="number"
        onChange={(e) => setAge(e.target.value)}
      />
      <p>
        <label>Email</label>
      </p>
      <input
        onBlur={validator}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>
        <label>Password</label>
      </p>
      <input
        onBlur={validator}
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>
        <label>Re-enter Password</label>
      </p>
      <input
        onBlur={validator}
        type="text"
        onChange={(e) => setResetPassword(e.target.value)}
      />
    </div>
  );
};

export default YupValidation;
