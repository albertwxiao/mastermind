import { useState } from 'react'
import './App.css'
import View from './components/game_view/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <View />
    </>
  )
}

export default App
