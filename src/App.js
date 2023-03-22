import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const submitWord = () => {
    axios({
      url: `http://localhost:8080/${word}`,
      method: 'GET'
    }).then((response) => {
      setDefinition(response.data.definition)
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          onClick={submitWord}
        >
          Submit
        </button>
        {definition}
      </header>
    </div>
  );
}

export default App;
