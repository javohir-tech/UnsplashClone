import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MianLayout from './Layout/MianLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MianLayout />
    </>
  )
}

export default App
