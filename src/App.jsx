import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Home from './page/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Home/>
    </div>
  )
}

export default App
