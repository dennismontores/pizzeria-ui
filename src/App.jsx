import { useState, useEffect } from 'react'
import CSS from './App.module.css'
import { Routing } from './navigation'

const App = () => {
  // Create the count state.
  const [count, setCount] = useState(0)
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])
  // Return the App component.
  return (
    <div className={CSS.App}>
      <h1>Pizzeria</h1>
      <Routing />
    </div>
  )
}

export default App
