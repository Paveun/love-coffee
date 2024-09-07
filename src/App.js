import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Wave from 'react-wavify';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <FontAwesomeIcon icon={faCoffee} className="coffee-icon" />
        <h1>paveun.</h1>
      </div>
      <div class="wave-background"></div>
      <div className="wave-container">
        <Wave
          fill="#d2b09b"
          paused={false}
          options={{
            height: 60,
            amplitude: 50,
            speed: 0.2,
            points: 3,
          }}
        />
      </div>
    </div>
  );
}

export default App;
