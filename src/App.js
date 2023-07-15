import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Userlogin from './Userlogin';
import Userdata from './Userdata';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Userlogin/>} />
        <Route path="/Userdata" element={<Userdata/>} />
      </Routes>
    </Router>
  );
};

export default App;
