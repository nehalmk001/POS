import React, { useState } from 'react';
import '../../css/Login.css';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'; // Import eye icons
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  // Simulated valid credentials
  const validUsername = 'admin';
  const validPassword = 'admin';

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if inputs are empty
    if (!username || !password) {
      setError('Enter username and password');
      return;
    }

    // Validate credentials
    if (username === validUsername && password === validPassword) {
      setError('');
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } else {
      setError('Invalid username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
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
              type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
              className="login-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            {/* Password visibility toggle icon */}
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </div>
          {error && <p style={{ color: 'red'}}>{error}</p>} {/* Error message */}
          <button type="submit" className="btn btn-primary btn-large btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
