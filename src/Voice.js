import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const VoiceDetector = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [inDanger, setInDanger] = useState(false);

  // Initialize speech recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Configure recognition settings
  recognition.continuous = true; // Keep listening even after speech ends
  recognition.interimResults = false; // Only return final results
  recognition.lang = 'en-US'; // Set language to English

  // Handle speech recognition results
  recognition.onresult = (event) => {
    const currentTranscript = event.results[event.results.length - 1][0].transcript.toLowerCase();
    setTranscript(currentTranscript);

    // Check if the transcript contains "help me"
    if (currentTranscript.includes('help me')) {
      setInDanger(true);
    }
  };

  // Handle errors
  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    setIsListening(false);
  };

  // Start/stop listening
  const toggleListening = () => {
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening((prev) => !prev);
  };

  // Send email via API
  const sendEmailAlert = async () => {
    // const emailData = {
    //   tomail: 'recipient@example.com', // Replace with the recipient's email
    //   subject: 'Emergency Alert',
    //   content: 'The user has triggered an emergency alert. Please take immediate action.',
    // };

    // try {
    //   const response = await fetch('https://b97d-61-2-44-2.ngrok-free.app/api/alert/send-alert', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(emailData),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Failed to send email alert');
    //   }
    //   console.log('Email alert sent successfully');
    // } catch (error) {
    //   console.error('Error sending email alert:', error);
    //}

    //e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    const values = {
      to_mail: 'roshithj@gmail.com',  // Replace with the recipient's email
      to_name: 'Roshith',             // Replace with the recipient's name
      subject: 'Emergency Alert',
      message: 'The user has triggered an emergency alert. Please take immediate action.'
    };
  
    // Use emailjs.send() instead of sendForm for sending the values directly
    emailjs.send('service_b33ic5o', 'template_ppcjp2j', values, 'roEvVvp_We7g6HcrZ')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        //window.location.reload(); // Optionally reload the page
      })
      .catch((error) => {
        console.log('Error sending email:', error.text);
      });
      // .then((result) => {
      //     window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  // Handle danger state
  const handleDanger = async () => {
    // Call 911
    //window.location.href = 'tel:911';

    // Show an alert
    //alert('Emergency! Dialing 911...');

    // Send email alert
    await sendEmailAlert();

    // Reset the danger state
    setInDanger(false);
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Voice Detector</h1>
      <p style={styles.instructions}>Say "help me" to trigger an alert.</p>
      <button onClick={toggleListening} style={styles.button}>
        {isListening ? 'On Alert Mode' : 'Alert'}
      </button>
      <p style={styles.transcript}>Transcript: {transcript}</p>
      {inDanger && (
        <div style={styles.alertBox}>
          <h2 style={styles.alertHeading}>Are You Safe?</h2>
          <button onClick={() => setInDanger(false)} style={styles.safeButton}>
            Yes
          </button>
          <button onClick={handleDanger} style={styles.dangerButton}>
            No
          </button>
        </div>
      )}
    </div>
  );
};

// Basic inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  instructions: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  transcript: {
    fontSize: '14px',
    marginTop: '20px',
  },
  alertBox: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ff4444',
    borderRadius: '5px',
    backgroundColor: '#ffebee',
  },
  alertHeading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  safeButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  dangerButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default VoiceDetector;