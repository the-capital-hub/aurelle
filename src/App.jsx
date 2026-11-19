import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AIFloatingButton from './components/AIFloatingButton/AIFloatingButton'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <>
    <Navbar/>

    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>




    <AIFloatingButton/>
    <Footer/>
    <WhatsAppButton/>
    </>
  )
}

export default App