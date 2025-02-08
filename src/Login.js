import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <button onClick={() => navigate('/login-form?type=user')} style={styles.button}>
        Login as User
      </button>
      <button onClick={() => navigate('/login-form?type=guardian')} style={styles.button}>
        Login as Guardian
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

export default Login;