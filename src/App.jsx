import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom"
import './App.css'
import Game from './components/game_view/index.jsx'
import Home from './components/home/index.jsx'
import HowToPlay from './components/how_to_play/index.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="howtoplay" element={<HowToPlay />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
