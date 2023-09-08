import React from 'react';
import NavBar from './components/NavBar.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Travels from './components/pages/Travels';
import Hobbies from './components/pages/Hobbies'

function App() {
  return (
   <>
   <Router>
    <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/hobbies' exact Component={Hobbies}/>
        <Route path='/projects' exact Component={Projects}/>
        <Route path='/skills' exact Component={Skills}/>
        <Route path='/travels' exact Component={Travels}/>
      </Routes>
   </Router>
    
   </>
  );
}

export default App;
