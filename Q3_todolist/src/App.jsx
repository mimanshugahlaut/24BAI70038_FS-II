import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

export default function App() {

  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);


  const add = () => {
    if (text.trim() === "") return;
    setTasks((prevItems) => [...prevItems, text]);
    setText("");
  };

  const del=(indexToDel)=>{
    setTasks((prevItems) =>
    prevItems.filter((_, index)=>index!=indexToDel)
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" value={text}
        onChange={(e)=>setText(e.target.value)}/>
        <div>
          <button onClick={add}>Submit</button>
        </div>
      </div>
      <ul>
      {tasks.map((task, index)=>(
        <li key={index}>
        <span>{task}</span>
        <button onClick={()=>del(index)}>Delete</button>
        </li>
      ))}
      </ul>
    </div>
  );
}