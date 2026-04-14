import { useState } from 'react'
import Navbar from './Componenets/navbar'
import HomePage from './Componenets/home'
import Taskbar from './Componenets/taskbar'
import Statsbar from './Componenets/stats'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [count, setCount] = useState(0)
  const [complete_count, setcomplete_count] = useState(0)

  const increament_count = () => {
    setCount(prev => prev + 1);
  }

  const decreament_count = () => {
    setcomplete_count(prev => prev + 1);
  }

  return (
    <Router basename="/React-AI-Ch1-">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/taskbar" element={<Taskbar count={increament_count} />} />
        <Route path="/statsbar" element={<Statsbar />} />
      </Routes>

    </Router>
  );
}

export default App