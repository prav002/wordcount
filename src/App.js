// src/App.js
import React from 'react';
import './App.css';
import WordCounter from './component/WordCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Counter App</h1>
      </header>
      <main>
        <WordCounter />
      </main>
    </div>
  );
}

export default App;
