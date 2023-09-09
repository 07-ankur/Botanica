// import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing_pg from './pages/LandingPage'

const App = () => {
  return (
    <div>
      <Routes>  
        <Route path='/' element={<Landing_pg/>}/>
      </Routes>
    </div>
  )
}

export default App
