import React, { useState } from 'react';
import '../Pages/signup.css'; 

const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkInputs();
  };

  const checkInputs = () => {
    const { username, email, password, password2 } = formValues;
    let errors = {
      username: '',
      email: '',
      password: '',
      password2: ''
    };
    let hasError = false;

    if (username.trim() === '') {
      errors.username = 'Username cannot be blank';
      hasError = true;
    }

    if (email.trim() === '') {
      errors.email = 'Email cannot be blank';
      hasError = true;
    } else if (!isEmail(email.trim())) {
      errors.email = 'Not a valid email';
      hasError = true;
    }

    if (password.trim() === '') {
      errors.password = 'Password cannot be blank';
      hasError = true;
    }

    if (password2.trim() === '') {
      errors.password2 = 'Password check cannot be blank';
      hasError = true;
    } else if (password !== password2) {
      errors.password2 = 'Passwords do not match';
      hasError = true;
    }

    setFormErrors(errors);
    if (!hasError) {
      // Handle successful form submission
      console.log('Form submitted successfully');
    }
  };

  const isEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Create Account</h2>
      </div>
      <form id="form" className="form" onSubmit={handleSubmit}>
        <div className={`form-control ${formErrors.username ? 'error' : ''}`}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
          <i className={`fas ${formErrors.username ? 'fa-exclamation-circle' : 'fa-check-circle'}`}></i>
          <small>{formErrors.username}</small>
        </div>
        <div className={`form-control ${formErrors.email ? 'error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <i className={`fas ${formErrors.email ? 'fa-exclamation-circle' : 'fa-check-circle'}`}></i>
          <small>{formErrors.email}</small>
        </div>
        <div className={`form-control ${formErrors.password ? 'error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
          <i className={`fas ${formErrors.password ? 'fa-exclamation-circle' : 'fa-check-circle'}`}></i>
          <small>{formErrors.password}</small>
        </div>
        <div className={`form-control ${formErrors.password2 ? 'error' : ''}`}>
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            id="password2"
            value={formValues.password2}
            onChange={handleInputChange}
          />
          <i className={`fas ${formErrors.password2 ? 'fa-exclamation-circle' : 'fa-check-circle'}`}></i>
          <small>{formErrors.password2}</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
