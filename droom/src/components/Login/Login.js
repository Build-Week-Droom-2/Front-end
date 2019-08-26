import React, {useState} from "react";
import { Router, Link } from 'react-router-dom';
import axios from 'axios';

const Login = props => {
 
  const [user, setUser] = useState({
    credentials : {
      email: '',
      password: ''
    }
  })

  const handleChange = e => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    // axios.post('here is the url for the back-end', user.credentials)
    //   .then(res => {
    //     localStorage.setItem('token', res.data.payload)
    //     props.history.push('/protected')
    //   })
    //   .catch(err => console.log(err.response))
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
              value={user.credentials.username}
              onChange={handleChange}
            />
          </label>  
          <label>
            Password
            <input
              type="password"
              name="password"
              value={user.credentials.password}
              onChange={handleChange}
            />
          </label>
          <a>Forgot your password?</a>
          <button className='loginButton' type='submit'>Sign in</button>
        </form>
    </div>
  );
};

export default Login;
