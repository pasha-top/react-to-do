import './App.scss';
import Home from './components/pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import React  from 'react';

function App() {
  
  return (
    <Routes>
      <Route path="/react-to-do" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
