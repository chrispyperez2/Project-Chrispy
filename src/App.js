import React from 'react';
import NavBar from './components/NavBar.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <>
   <Router>
    <NavBar/>
      <Routes>
        <Route path='/' exact/>

        
      </Routes>
   </Router>
    
   </>
  );
}

export default App;
