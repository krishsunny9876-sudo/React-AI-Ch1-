import { useState } from 'react'
import Navbar from './Componenets/navbar'
import HomePage from './Componenets/home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (<Router>
    <Routes>
      <Route
        path="/header"
        element={<MyPage alert={setting_alert} />}
      />
    </Routes>
    <Navbar />
    <HomePage />
  </Router>)
}

export default App
