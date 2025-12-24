import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom"
import './App.css'
import Game from './components/game_view/index.jsx'
import Home from './components/home/index.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
