import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Routes ,Route,BrowserRouter as Router, } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:url" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
