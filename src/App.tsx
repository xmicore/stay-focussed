import React, { useState } from 'react';
import './App.css';
import Setup from './components/Setup';
import Fokus from './components/Fokus';

function App() {

const [timerDuration, setTimerDuration] = useState(0)

  const startFokus = (duration: number) => {
    setTimerDuration(duration);
  };

  return (
    <div className="app">
      <h1>Stay Focussed</h1>
      <Setup onFokusStart={startFokus}/>
      <br></br>
      <Fokus duration={timerDuration} />
    </div>
  );
}

export default App;
