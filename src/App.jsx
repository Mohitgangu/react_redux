import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cake from './components/Cake'
import IceCream from './components/IceCream'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cake/>
     <IceCream/>
    </>
  )
}

export default App
