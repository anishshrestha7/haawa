import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Destination from './pages/Destination'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Destination" element={<Destination/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App