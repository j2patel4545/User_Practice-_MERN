import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Register from './Components/Register'
import Dashboaed from './Components/Dashboaed'
import Login from './Components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
        
        <Routes>
          <Route path='/login' element={<Login/>} />
        </Routes>
        <Routes>
          <Route path='/das' element={<Dashboaed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
