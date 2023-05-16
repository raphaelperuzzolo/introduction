import { useState } from 'react'
import dev from './assets/dev.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={dev} className="logo" alt="logo" />
      </div>
      <h1>Raphael Peruzzolo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Click above and have some fun!
        </p>
      </div>
      <p className="read-the-docs">
        Introduction under construction
      </p>
    </>
  )
}

export default App
