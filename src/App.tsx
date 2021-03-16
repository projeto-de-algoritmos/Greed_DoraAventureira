import React, {useState} from 'react';
import logo from './assets/dora.png';
import items from './Knapsack/itens';
import knapsack from './Knapsack/knapsack';
import './App.css';

function App() {
  const [selectedItems, setSelectedItems] = useState<Array<any>>([]);
  const [capacity, setCapacity] = useState<number>(0);
  const [carried, setCarried] = useState<Array<any>>([]);
  const [modalVisible, setModalVisible] = useState<Boolean>(false);

  const selectItems = (item: any) => {
    setSelectedItems([...selectedItems, item]);
  }

  const onSubmit = () => {
    if(capacity > 1000 || capacity < 500){
      alert("Capacidade invalida, escolhe uma capacidade entre 500 e 1000");
    }
    else{
      const result: any = knapsack(selectedItems, capacity);
      const resultadoMesmo: Array<any> = result['subset'];
      setCarried(resultadoMesmo);
      setModalVisible(true);
    }
    
  }

  return (
    <div className="App">
        <h1>Dora Aventureira</h1>
        <p>Você está indo em uma aventura perigosa com a Dora, para isso você precisa selecionar muito bem os item que irá levar para dar conta de carregar na sua mochila. A Dora irá te ajudar a selecionar os melhores itens para que você sobreviva a esta aventura!</p>
        <div className="image">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="options">
          {items && items.map((item, index) => (
            <button key={index} onClick={() => selectItems(item)}>
              <img src={item.image} alt= ""/>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
        { selectedItems.length > 0 ? (
          <span id="quantity">Voce selecionou {selectedItems.length}</span>
          ) : null
        }
        <div className="submit">
          <input 
            type="number"
            placeholder="Digite a capacidade da bolsa da Dora (entre 500 e 1000)"
            value={capacity}
            onChange={(e) => setCapacity(parseInt(e.target.value))}
          />
          <button onClick={() => onSubmit()}>Calcular</button>
        </div>

        {modalVisible && (
          <div className="resultBlur" onClick={()=>setModalVisible(false)}>
              <h1 id="modalTitle">Itens que a Dora escolheu</h1>
            <div className="resultContent">
              {carried && carried.map((item, index) => (
                <label key={index}>
                  <img src={item.image} alt="" />
                  <span>{item.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}

export default App;
