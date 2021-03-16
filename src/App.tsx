import React, {useState} from 'react';
import logo from './assets/dora.png';
import comida from './assets/comida.png';
import './App.css';

function App() {
  const [selectedItems, setSelectedItems] = useState<number>(0);
  const [capacity, setCapacity] = useState<number>(0);

  const selectItems = () => {

    var newData: number = selectedItems;
    newData++;
    setSelectedItems(newData);

  }

  return (
    <div className="App">
        <h1>Dora Aventureira</h1>
        <p>Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho Textinho </p>
        <div className="image">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="options">
          <button onClick={() => selectItems()}>
            <img src={comida} alt= ""/>
            <span>Comida</span>
          </button>
          <button onClick={() => selectItems()}>
            <img src={comida} alt= ""/>
            <span>Comida</span>
          </button>
          <button onClick={() => selectItems()}>
            <img src={comida} alt= ""/>
            <span>Comida</span>
          </button>
          <button onClick={() => selectItems()}>
            <img src={comida} alt= ""/>
            <span>Comida</span>
          </button>
          <button onClick={() => selectItems()}>
            <img src={comida} alt= ""/>
            <span>Comida</span>
          </button>
          <button onClick={() => selectItems()}>
            <img src={comida} alt= ""/>
            <span>Comida</span>
          </button>
          <button onClick={() => selectItems()}>
            <img src={comida} alt= ""/>
            <span>Comida</span>
          </button>
          <button onClick={() => selectItems()}>
            <img src={comida} alt= ""/>
            <span>Comida</span>
          </button>
          <button onClick={() => selectItems()}>
            <img src={comida} alt= ""/>
            <span>Comida</span>
          </button>
          <button onClick={() => selectItems()}>
            <img src={comida} alt= ""/>
            <span>Comida</span>
          </button>
        </div>
        { selectedItems > 0 ? (
          <span id="quantity">Voce selecionou {selectedItems}</span>
          ) : null
        }
        <div className="submit">
          <input 
            type="number"
            placeholder="Digite a capacidade da bolsa da Dora (entre 500 e 1000)"
            value={capacity}
            onChange={(e) => setCapacity(parseInt(e.target.value))}
          />
          <button onClick={() => {console.log(capacity)}}>Calcular</button>
        </div>
    </div>
  );
}

export default App;
