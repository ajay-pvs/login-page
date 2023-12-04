import React, { useState, useEffect } from "react";
import './LoginForm.css'; // Import the CSS file

function LoginForm() {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  useEffect(() => {
    // Check if email is not empty
    setIsValidEmail(login.username.trim() !== '');

    // Check if password is not empty
    setIsValidPassword(login.password.trim() !== '');
  }, [login]);

  const handleLogin = () => {
    console.log('Logging in with:', login);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  return (
    <div className="containers">
      <h2 className="heading">Login Form</h2>
      <form className="form">
        <label className="label">
          Email:
          <input
            className="input"
            type="text"
            name="username"
            value={login.username}
            onChange={handleInputChange}
          />
        </label>
        {!isValidEmail && <p className="error">Email cannot be empty</p>}
        <br />
        <label className="label">
          Password:
          <input
            className="input"
            type="password"
            name="password"
            value={login.password}
            onChange={handleInputChange}
          />
        </label>
        {!isValidPassword && <p className="error">Password cannot be empty</p>}
        <br />
        <button
          className="button"
          type="button"
          onClick={handleLogin}
          disabled={!isValidEmail || !isValidPassword}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
