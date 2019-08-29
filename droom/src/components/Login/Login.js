import React, {useState} from "react";
import { Link, Route } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import axios from 'axios'

const Login = props => {
 console.log('login page props', props)
  const [user, setUser] = useState({
      email: '',
      password: ''
    
  })

  const handleChange = e => {
    setUser({
      ...user,
        [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        //props.history.push('/protected')
        console.log('login page',res.config.data)
      })
      .catch(err => console.log('err in catch',err.response))
  }

  return (
    <div className = 'loginFormDiv'>
      <div className='loginP'>
        <p>Droom: Your </p> 
        <p>career dreams,</p> 
        <p>delivered.</p>
      </div>
        <form className='loginForm' onSubmit={login}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>  
          <label>
            Password
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </label>
          <a>Forgot your password?</a>
          <button className='loginButton' type='submit'>Sign in</button>
        </form>
        <div className='loginLine'></div>
        <p>Or</p>
        <button className='extra'>Sign in with LinkedIn</button>
    </div>
  );
};

export default Login;
