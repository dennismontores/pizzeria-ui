import CSS from './App.module.css'
import { Routing } from './navigation'

const App = () => {
  return (
    <div className={CSS.App}>
      <h1>Pizzeria</h1>
      <Routing />
    </div>
  )
}

export default App
