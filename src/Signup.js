import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    email: '',
    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Save formData to localStorage or send to backend
    console.log('Signup Data:', formData);
    alert('Signup successful!');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="guardianName"
          placeholder="Guardian Name"
          value={formData.guardianName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="tel"
          name="guardianPhone"
          placeholder="Guardian Phone Number"
          value={formData.guardianPhone}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="guardianEmail"
          placeholder="Guardian Email"
          value={formData.guardianEmail}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-enter Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Signup
        </button>
      </form>
      <button onClick={() => navigate('/login')} style={styles.button}>
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
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Signup;