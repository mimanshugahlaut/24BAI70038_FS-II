import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [amt, setAmt] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [res, setRes] = useState(0);

  const convert = async() => {
    if (!fromCurrency || !toCurrency) {
        alert("Please select both currencies");
        return;
    }
    const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const converted = amt * rate;
    setRes(converted);
  };

  return (
    <>
    <h1>Currency Converter</h1>
      <h2>Enter amount:</h2>
      <input className="input" type="number" value={amt} onChange={(e) => setAmt(e.target.value)}></input>

      <h2>From: </h2>
      <select className="select" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="">Select Currency</option>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
      </select>

      
      <h2>To: </h2>
      <select className="select" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="">Select Currency</option>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
      </select>

      <button className="btn" onClick={convert}>Convert</button>

      <h2 className='result'>Converted Amount: {res.toFixed(2)}</h2>
    </>
  )
}

export default App