import React from 'react';
import './App.css';
import Timer from './components/Timer';
import Fokus from './components/Fokus';

function App() {
  return (
    <div className="app">
      <h1>Stay Focussed</h1>
      <Timer/>
      <br></br>
      <Fokus duration={2} />
    </div>
  );
}

export default App;
