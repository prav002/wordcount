// src/WordCounter.js
import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordcount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type something..."
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <p>Word Count: {wordcount}</p>
    </div>
  );
}

export default WordCounter;
