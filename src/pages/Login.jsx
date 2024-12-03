/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login_pic, logo } from '../assets/login/index';
import '../styles/loginStyles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };


  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <main className='login-cls'>
      <form className='login-form' onSubmit={handleLogin}>
        <img className='logo-img' src={logo} alt='logo' />
        <h1>Welcome Back 👋</h1>
        <p>
          Today is a new day. It's your day. You shape it.<br />
          Sign in to start ordering.
        </p>
        <div className='sub-form'>
          <label htmlFor='emailaddress'>Email</label>
          <input
            id='emailaddress'
            type='email'
            placeholder='Example@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='sub-form'>
          <label htmlFor='pwd'>Password</label>
          <input
            id='pwd'
            type='password'
            placeholder='At least 8 characters'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='signin-btn' type='submit'>Sign in</button>
        <p className='noacc-cls'>
          Don't you have an account? <span 
            onClick={handleSignUpClick} 
            style={{ cursor: 'pointer'}}
          >
            Sign up
          </span>
        </p>
      </form>
      <img className='login-img' src={login_pic} alt='login page pic'/>
    </main>
  );
};

export default Login;
