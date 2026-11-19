import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AIFloatingButton from './components/AIFloatingButton/AIFloatingButton'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Team from './Pages/Team/Team'
import Gallery from './Pages/Gallery/Gallery'

const App = () => {
  return (
    <>
    <Navbar/>

    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
          <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
              <Route path="/gallery" element={<Gallery />} />



      </Routes>
    </main>




    <AIFloatingButton/>
    <Footer/>
    <WhatsAppButton/>
    </>
  )
}

export default App