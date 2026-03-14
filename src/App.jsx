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
  const increament_count = () => {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/taskbar" element={<Taskbar count={increament_count} />} />
      </Routes>

    </Router>
  );
}

export default App