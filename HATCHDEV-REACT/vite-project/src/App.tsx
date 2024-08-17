import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("Toyibah")
  const [count, setCount] = useState(0)
  const [visibility, setVisibility] = useState(false)

  /* useEffect(() => {
    console.log("Heyy, I'm a useEffect function")
  })  *///Calls the use effect whenever there is a render(a change in anything in the page)- nothing is passed as dependency

  useEffect(() => {
    console.log("Heyy, I'm a useEffect function")
  }, []) //Use effect is called only on the first render

  useEffect(() => {
    console.log("Heyy, I'm a useEffect function")
  }, [count]) //called once in first render and when only count changes it renders again. not called when maybe name changes or something



  const handleClick = (value: number) => {
    setCount(value);
  }

  const increment = () => {
    setCount(count +1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  
  return (
    <>
      <div>Hello {name}</div>
      <p>Counter {count}</p>

      <button onClick = {() => handleClick(20)}>Click me</button>
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>

      <div>
        <input  type=  {visibility? "text" : "password"}></input>
        <button onClick = {toggleVisibility}>{visibility? "Hide Password": "Show Password"}</button>
      </div>
      
      
    </>
  )
}

export default App
