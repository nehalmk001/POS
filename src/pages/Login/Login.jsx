import React, { useState } from 'react';
import '../../css/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Simulated valid credentials
  const validUsername = 'admin';
  const validPassword = 'admin';

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (username === validUsername && password === validPassword) {
      setError('');
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <div className="login-screen">
        <div className="app-title">
          <h1>Login</h1>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="control-group">
            <input
              type="text"
              className="login-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
          </div>

          <div className="control-group">
            <input
              type="password"
              className="login-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message */}

          <button type="submit" className="btn btn-primary btn-large btn-block">
            Login
          </button>

          <a className="login-link" href="#">
            Lost your password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
