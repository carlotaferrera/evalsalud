import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';
import Step1 from './pages/Step1/Step1';
import Step2 from './pages/Step2/Step2';
import Intermediate from './pages/Intermediate/Intermediate';
import './styles/index.css';
import Results from './pages/Results/Results';
import AboutUs from './pages/Info/AboutUs';
import Mejoras from './pages/Info/Mejoras';
import Contact from './pages/Info/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/results" element={<Results />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mejoras" element={<Mejoras />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/intermediate" element={<Intermediate />} />
      </Routes>
    </Router>
  );
}

export default App;