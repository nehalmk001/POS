import React from 'react'
import '../../css/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
  
        
        <div className="login">
  <div className="login-screen">
    <div className="app-title">
      <h1>Login</h1>
    </div>
    <div className="login-form">
      <div className="control-group">
        <input
          type="text"
          className="login-field"
          defaultValue=""
          placeholder="username"
        />
       
      </div>
      <div className="control-group">
        <input
          type="password"
          className="login-field"
          defaultValue=""
          placeholder="password"
        />
       
      </div>
      <Link to='/dashboard' className="btn btn-primary btn-large btn-block" href="#">
        login
      </Link>
      <a className="login-link" href="#">
        Lost your password?
      </a>
    </div>
  </div>
</div>
   


   
  )
}

export default Login