import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [time, setTime]=useState(0);
  const [intervalId, setIntervalId]=useState(null);

  const start=()=>{

    if(intervalId)
      return;

    const id=setInterval(()=>{
      setTime(prev=>prev+1);
    }, 1000);
    
    setIntervalId(id);
  }

  const stop=()=>{
    clearInterval(intervalId);
    setIntervalId(null);
  }

  const reset=()=>{
    clearInterval(intervalId);
    setTime(0);
  }
  
  const hours=Math.floor(time/3600);
  const mins=Math.floor((time%3600)/60);
  const seconds=time%60;

  return (
    <>
    <div className="btn">
      <h1>
        {String(hours).padStart(2, "0")}:
        {String(mins).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default App