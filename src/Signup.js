import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from './constant';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    age: '',
    email: '',
    password: '',
    guardian_name: '',
    guardian_phone: '',
    guardian_email: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }

    // Validate age
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 0 || age > 150) {
      setError('Please enter a valid age');
      return;
    }

    // Prepare payload
    const payload = {
      ...formData,
      age: parseInt(formData.age), // Convert age to number
    };

    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/auth/signup`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data) {
        alert('Signup successful!');
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError(
        error.response?.data?.message || 
        'An error occurred during signup. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="guardian_name"
          placeholder="Guardian Name"
          value={formData.guardian_name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="tel"
          name="guardian_phone"
          placeholder="Guardian Phone"
          value={formData.guardian_phone}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="guardian_email"
          placeholder="Guardian Email"
          value={formData.guardian_email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button 
          type="submit" 
          style={{...styles.button, opacity: loading ? 0.7 : 1}}
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      <button 
        onClick={() => navigate('/login')} 
        style={styles.button}
        disabled={loading}
      >
        Back to Login
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
    maxWidth: '500px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    margin: '10px 0',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    margin: '10px 0',
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
  },
  error: {
    color: '#dc3545',
    marginBottom: '15px',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f8d7da',
    border: '1px solid #f5c6cb',
    width: '100%',
  }
};

export default Signup;