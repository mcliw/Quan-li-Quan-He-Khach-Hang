// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/items', { content: input });
      setInput('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
