import { useState } from 'react';
import './App.css';

function App() {
  const colors = ['red', 'orange', 'blue', 'green', 'white'];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className="container" style={{ backgroundColor: colors[index] }}>
      <button onClick={handleClick}>Change Background</button>
    </div>
  );
}

export default App;

