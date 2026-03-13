import { useState } from 'react'
import Navbar from './Componenets/navbar'
import HomePage from './Componenets/home'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Navbar />
    <HomePage />
  </>)
}

export default App
