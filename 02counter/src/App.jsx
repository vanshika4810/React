import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () =>{
    console.log("clicked", counter)
    counter = counter+1
    if(counter>20) {
      alert("Counter cannot go above 20")
      counter = 20
    }
    setCounter(counter)
  }

  const removeValue = () =>{
    console.log("clicked", counter)
    counter = counter-1
    if(counter<0) {
      alert("Counter cannot go below 0")
      counter = 0
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
