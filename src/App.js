import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import Invoice from './pages/invoice';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Invoice />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
