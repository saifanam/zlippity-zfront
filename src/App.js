import React, { useState } from 'react';
import useDictData from './hooks/useDictData'
import './App.css';

function App() {
  const [word, setWord] = useState('')
  const definition = useDictData(word)
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        {definition}
      </header>
    </div>
  );
}

export default App
