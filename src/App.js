import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./Login";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import HomePage from "./HomePage";
import VoiceDetector from "./Voice";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="Signup" element={<Signup/>}/>
      
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/dashboard" element={<VoiceDetector/>}/>
      </Routes>
    </Router>
  );
};

export default App;
