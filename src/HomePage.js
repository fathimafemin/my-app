import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [situation, setSituation] = useState('');

  const handleAlert = () => {
    if (situation.trim() === '') {
      alert('Please describe your situation!');
      return;
    }
    // Add logic to send the situation to the backend or trigger an alert
    alert(`Alert sent! Situation: ${situation}`);
    // Reset the text box
    setSituation('');
  };

  const handleLogout = () => {
    // Add logout logic (e.g., clear session/token)
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Emergency Assistance</h2>
      <textarea
        placeholder="Describe your situation..."
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        style={styles.textarea}
      />
      <button onClick={handleAlert} style={styles.alertButton}>
        Send Alert
      </button>
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    color: '#ff4444',
    marginBottom: '20px',
  },
  textarea: {
    width: '300px',
    height: '150px',
    padding: '10px',
    borderRadius: '10px',
    border: '2px solid #ff4444',
    fontSize: '16px',
    marginBottom: '20px',
    resize: 'none',
  },
  alertButton: {
    padding: '10px 20px',
    backgroundColor: '#ff4444',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default HomePage;