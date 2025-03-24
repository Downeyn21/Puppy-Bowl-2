import { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage'
import PlayerList from './components/PlayerList'
import { Route, Routes } from 'react-router-dom'
import AddPup from './components/AddPup'
import NavBar from './components/NavBar'
import SinglePup from './components/SinglePup'

function App() {
const [playerId, setPlayerId] = useState("")


  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/AddPup' element={<AddPup />} />
          <Route path='/SinglePup/:playerId' element={<SinglePup />} />
        </Routes>
      </div>
    </>
  )
}

export default App
