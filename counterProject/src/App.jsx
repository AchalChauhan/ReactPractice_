import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = ()=>{
    setCounter(++counter);
  }
  const subtractValue = ()=>{
    if(counter===0) return;
    setCounter(--counter);
  }
  return (
    <>
    <h1>React Counter application</h1>
    <h3>Counter value: {counter}</h3>
    <button onClick={addValue}>+</button>
    <button onClick={subtractValue}>-</button>
    </>
  )
}

export default App
