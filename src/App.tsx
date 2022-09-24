import React from 'react';
import './App.css';
import { Card } from './components/Card'

function App() {
  return (
    <div className="container">
      <div className="card-container">
        <Card />
      </div>
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default App;
