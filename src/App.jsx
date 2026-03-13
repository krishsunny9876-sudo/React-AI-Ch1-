import { useState } from 'react'
import Navbar from './Componenets/navbar'
import HomePage from './Componenets/home'
import Taskbar from './Componenets/taskbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [count, setCount] = useState(0)

  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/taskbar" element={<Taskbar />} />
      </Routes>

    </Router>
  );
}

export default App