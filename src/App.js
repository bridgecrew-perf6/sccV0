import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import GlobalStyle from './components/globalStyles';
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
    </Router>
  );
}

export default App;
