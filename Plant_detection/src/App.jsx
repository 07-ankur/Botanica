// import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing_pg from './pages/LandingPage_alt'
import Landing_pg1 from './pages/LandingPage'

const App = () => {
  return (
    <div>
      <Routes>  
        <Route path='/' element={<Landing_pg/>}/>
        <Route path='/landing' element={<Landing_pg1/>}/>
      </Routes>
    </div>
  )
}

export default App
