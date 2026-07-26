import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  return (
    <div className="app">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease
      </button>
    </div>
  );
}

export default App;