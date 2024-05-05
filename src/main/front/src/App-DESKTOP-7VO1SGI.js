import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';

function App() {

  // let name = 'umjunsick'
  let [num, setNum] = useState(1)
  let [name, setName] = useState('야왕이네')

  return (
    <div className="App">
      <header className="App-header">
          <div>{num}</div>
          <button onClick={() => (setNum(num += 1))}>버튼</button>
      </header>
    </div>
  );
}

export default App;
