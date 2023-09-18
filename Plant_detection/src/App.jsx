// import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing_pg from './pages/LandingPage_alt'
import Landing_pg1 from './pages/LandingPage'
import Login_pg from './pages/Authentication/Login'
import Signup_pg from './pages/Authentication/Signup'
import Home_Pg from './pages/Home_Pg'
import FileUpload_Pg from './pages/FileUpload_Pg'

const App = () => {
  return (
    <div>
      <Routes>  
        <Route path='/' element={<Landing_pg/>}/>
        <Route path='/landing' element={<Landing_pg1/>}/>
        <Route path='/auth/login' element={<Login_pg/>}/>
        <Route path='/auth/signup' element={<Signup_pg/>}/>
        <Route path='/home' element={<Home_Pg/>}/>
        <Route path='/file_up' element={<FileUpload_Pg/>}/>
      </Routes>
    </div>
  )
}

export default App;