import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Consultations from './pages/consult/Consultations'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import TCC from './pages/tcc/TCC'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='navbar-container'>
      <Navbar />
      </div>
      <div className='pages-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='tcc' element={<TCC />} />
        <Route path='consult' element={<Consultations />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
    </div>
  )
}

export default App
