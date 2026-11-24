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
import HairPricing from './Pages/PricingSubPage/HairPricing/HairPricing'
import FacialPricing from './Pages/PricingSubPage/FacialPricing/FacialPricing'
import MakeupPricing from './Pages/PricingSubPage/MakeupPricing/MakeupPricing'
import NailPricing from './Pages/PricingSubPage/NailPricing/NailPricing'
import WaxingPricing from './Pages/PricingSubPage/WaxingPricing/WaxingPricing'
import PedicureManicurePricing from './Pages/PricingSubPage/PedicureManicurePricing/PedicureManicurePricing'
import BodyTreatmentsPricing from './Pages/PricingSubPage/BodyTreatmentsPricing/BodyTreatmentsPricing'
import PackagesPricing from './Pages/PricingSubPage/PackagesPricing/PackagesPricing'
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails'
import HairStylingPage from './SubPage/HairStylingPage/HairStylingPage'
import MensGroomingPage from './SubPage/MensGroomingPage/MensGroomingPage'
import SkinFacialPage from './SubPage/SkinFacialPage/SkinFacialPage'
import MakeupBridalPage from './SubPage/MakeupBridalPage/MakeupBridalPage'
import NailStudioPage from './SubPage/NailStudioPage/NailStudioPage'
import WaxingThreadingPage from './SubPage/WaxingThreadingPage/WaxingThreadingPage'
import ManicurePedicurePage from './SubPage/ManicurePedicurePage/ManicurePedicurePage'
import BodySpaPage from './SubPage/BodySpaPage/BodySpaPage'
import BridalGroomPackagesPage from './SubPage/BridalGroomPackagesPage/BridalGroomPackagesPage'

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
              <Route path="/pricing/hair" element={<HairPricing />} />
              <Route path="/pricing/skin" element={<FacialPricing />} />
              <Route path="/pricing/makeup" element={<MakeupPricing />} />
              <Route path="/pricing/nails" element={<NailPricing />} />
              <Route
  path="/pricing/waxing-threading"
  element={<WaxingPricing />}
/>
<Route
  path="/pricing/pedicure-manicure"
  element={<PedicureManicurePricing />}
/>
<Route
  path="/pricing/body-treatments"
  element={<BodyTreatmentsPricing />}

/>
<Route
  path="/pricing/packages"
  element={<PackagesPricing />}
/>
              <Route path="/offers" element={<Offers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route
  path="/services/hair"
  element={<HairStylingPage />}
/>
<Route
  path="/services/grooming"
  element={<MensGroomingPage />}
/>
<Route
  path="/services/skin"
  element={<SkinFacialPage />}
/>
<Route
  path="/services/makeup"
  element={<MakeupBridalPage />}
/>
<Route
  path="/services/nails"
  element={<NailStudioPage />}
/>
<Route
  path="/services/waxing"
  element={<WaxingThreadingPage />}
/>
<Route
  path="/services/pedicure"
  element={<ManicurePedicurePage />}
/>
<Route
  path="/services/body-spa"
  element={<BodySpaPage />}
/>

              
              {/* <Route path="/services/:slug" element={<ServiceDetails />} /> */}



      </Routes>
    </main>




    <AIFloatingButton/>
    <Footer/>
    <WhatsAppButton/>
    </>
  )
}

export default App