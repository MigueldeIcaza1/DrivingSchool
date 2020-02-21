import React from 'react';
import './App.css';
import car from './car.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ESCORT DRVING SCHOOL
        </p>
        <img src={car} className="App-logo" alt="car"/>

        <p>Call: 92 465 95 686</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
