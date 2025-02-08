import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const loginType = queryParams.get('type'); // 'user' or 'guardian'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a successful login if email and password are not empty
    if (email && password) {
      console.log(`Logging in as ${loginType}:`, { email, password });
      alert(`Logged in as ${loginType}`);
      navigate('/homepage'); // Redirect to the home page
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login as {loginType === 'user' ? 'User' : 'Guardian'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
      <button onClick={() => navigate('/signup')} style={styles.button}>
        Create New Account
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '300px',
  },
  button: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    width: '200px',
  },
};

export default LoginForm;