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
import Pricing from './Pages/Pricing/Pricing'
import Offers from './Pages/Offers/Offers'
import Contact from './Pages/Contact/Contact'
import Booking from './Pages/Booking/Booking'
import HairServices from './SubPage/HairServices/HairServices'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>

    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
          <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/services/hair" element={<HairServices />} />



      </Routes>
    </main>




    <AIFloatingButton/>
    <Footer/>
    <WhatsAppButton/>
    </>
  )
}

export default App