import React from 'react';
import './App.css';
// Screens
import Home from './screens/Home';
import Map from './screens/Map';
import District from './screens/District';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/map' exact component={Map} />
      <Route path='/district' exact component={District} />
    </Router>
  );
}

export default App;
