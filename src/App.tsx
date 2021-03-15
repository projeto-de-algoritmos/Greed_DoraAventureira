import React from 'react';
import logo from './assets/dora.png';
import comida from './assets/comida.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Dora Aventureira</h1>
        <p>Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho </p>
        <div className="image">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <input />
            <button>Calcular</button>
          </div>
        </div>
        <div className="options">
          <button>
            <img src={comida} alt= ""/>
          </button>
          <button>
            <img src={comida} alt= ""/>
          </button>
          <button>
            <img src={comida} alt= ""/>
          </button>
          <button>
            <img src={comida} alt= ""/>
          </button>
          <button>
            <img src={comida} alt= ""/>
          </button>
          <button>
            <img src={comida} alt= ""/>
          </button>
          <button>
            <img src={comida} alt= ""/>
          </button>
          <button>
            <img src={comida} alt= ""/>
          </button>
          <button>
            <img src={comida} alt= ""/>
          </button>
          <button>
            <img src={comida} alt= ""/>
          </button>
        </div>
    </div>
  );
}

export default App;
