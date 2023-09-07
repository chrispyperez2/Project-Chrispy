import React from 'react';
import NavBar from './components/NavBar.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
   <>
   <Router>
    <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
      </Routes>
   </Router>
    
   </>
  );
}

export default App;
