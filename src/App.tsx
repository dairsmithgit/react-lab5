import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { ListStoriesRoute } from './components/ListStoriesRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <ListStoriesRoute />
    </div>
    </Router>
  );
}

export default App;
