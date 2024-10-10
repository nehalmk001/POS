import React, { useState } from 'react';
import '../../css/Login.css';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'; // Import eye icons
import { useNavigate } from 'react-router-dom';
import posimage from '../../assets/pos-image.png';

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
    <div className="login-main">
    <div className="illustration">
      <img src={posimage} alt="Illustration" />
    </div>
    <div className="login-form">
     <div className="login-wrapper">
        <h1>Welcome To <span>LOGIN</span></h1>
        <form className="form" onSubmit={handleLogin}>
          <div className="input-group">
            <label for="email">Email Address</label>
            <input type="name"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             id="email"
             // placeholder="Email" 
              />
          </div>
          <div className="input-group">
             <label for="password">Password</label> 
            <input 
           type={showPassword ? "text" : "password"} 
             id="password"
              // placeholder="Password" 
              value={password}
               onChange={(e) => setPassword(e.target.value)}/>
               <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
             </span>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault">Keep me logged in</label>
          </div>
          {error && <p style={{ color: 'red'}}>{error}</p>} 
          <button type="submit" className="login-btn">Log in</button>
        </form>
     </div>
    </div>
  </div>
    // <div className="login">
    //   <div className="login-screen">
    //     <div className="app-title">
    //       <h1>Login</h1>
    //     </div>
    //     <form className="login-form" onSubmit={handleLogin}>
    //       <div className="control-group">
    //         <input
    //           type="text"
    //           className="login-field"
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //           placeholder="username"
    //         />
    //       </div>
    //       <div className="control-group">
    //         <input
    //           type={showPassword ? "text" : "password"} 
    //           className="login-field"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           placeholder="password"
    //         />
         
    //         <span className="toggle-password" onClick={togglePasswordVisibility}>
    //           {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
    //         </span>
    //       </div>
    //       {error && <p style={{ color: 'red'}}>{error}</p>} 
    //       <button type="submit" className="btn btn-primary btn-large btn-block">
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Login;
