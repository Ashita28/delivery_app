/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login_pic, logo } from '../assets/login/index';
import '../styles/signupStyles.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }

    
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className='signup-cls'>
      <form className='signup-form' onSubmit={handleRegister}>
        <img className='logo' src={logo} alt='logo' />
        <h1>Welcome 👋</h1>
        <p>
          Today is a new day. It's your day. You shape it.<br />
          Sign up to start ordering.
        </p>
        {error && <p className="error-message">{error}</p>}
        <div className='sub-sign'>
          <label htmlFor='urname'>Name</label>
          <input
            id='urname'
            name='name'
            type='text'
            placeholder='eg. John A'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='sub-sign'>
          <label htmlFor='phoneno'>Phone Number</label>
          <input
            id='phoneno'
            name='phone'
            type='tel'
            placeholder='Enter your 10 digit mobile number'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='sub-sign'>
          <label htmlFor='mailaddress'>Email</label>
          <input
            id='mailaddress'
            name='email'
            type='email'
            placeholder='Example@email.com'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='sub-sign'>
          <label htmlFor='pin'>Password</label>
          <input
            id='pin'
            name='password'
            type='password'
            placeholder='At least 8 characters'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className='signup-btn' type='submit'>Sign up</button>
        <p className='noacc-cls'>
          Already have an account?
          <Link to="/login" style={{ textDecoration: "none" }}>
            {' '}
            <span>Sign in</span>
          </Link>
        </p>
      </form>
      <img className='signup-img' src={login_pic} alt='login page pic' />
    </main>
  );
};

export default Register;
