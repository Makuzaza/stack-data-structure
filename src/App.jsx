import './index.css';
import React, { useState } from 'react';

function App() {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const enqueue = () => {
    setQueue([...queue, inputValue]);
    setInputValue('');
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const updatedQueue = [...queue];
      updatedQueue.shift(); // remove the first element - FIFO (First In, First Out)
      // updatedQueue.pop(); // remove the last element - LIFO (Last In, First Out)
      setQueue(updatedQueue);
    }
  };

  return (
    <main>
    <div className="app">
      <h1>Stack data structure app</h1>
      <p>It is a linear data structure which follows a particular order - FIFO (First In, First Out)</p>
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet"/>
      <div className="queue">
        {queue.map((item, index) => (
          <div key={index} className="queue-item">
            {item}
          </div>
        ))}
      </div>
      <div className="controls">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter number..."
        />
        <button onClick={enqueue}>Add</button>
        <button onClick={dequeue}>Delete</button>
      </div>
    </div></main>
  );
};

export default App;
