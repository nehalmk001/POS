import React, { useState } from 'react';
import '../../css/Login.css';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import posimage from '../../assets/pos-image.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if inputs are empty
    if (!username || !password) {
      setError('Enter username and password');
      return;
    }

    try {
      // Sending a POST request to the login API
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Check if the response is successful
      if (response.ok) {
        setError(''); // Clear any existing error
        localStorage.setItem('username', username); // Store username in localStorage

        // Navigate to the dashboard and pass the username and showAlert flag
        navigate('/dashboard', { state: { username, showAlert: true } });
      } else {
        setError(data.message || 'Invalid username or password');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-main">
      <div className="illustration">
        <img src={posimage} alt="Illustration" />
      </div>
      <div className="login-form">
        <div className="login-wrapper">
          <h1>Welcome To <span>LOGIN</span></h1>
          <form className="form" onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Keep me logged in</label>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="login-btn">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
