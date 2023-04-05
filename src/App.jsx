import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import DashBoard from './components/DashBoard/DashBoard'
import Phonebar from './components/PhoneBar/Phonebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
   <Navbar></Navbar>
    {/* <h1 className='text-7xl text-purple-600'>Hello From Tailwind</h1> */}
    <PriceList></PriceList>
    <DashBoard></DashBoard>
    <Phonebar></Phonebar>
      
    </div>
  )
}

export default App
