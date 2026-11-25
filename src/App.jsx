
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AIFloatingButton from './components/AIFloatingButton/AIFloatingButton'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Team from './Pages/Team/Team'
import Gallery from './Pages/Gallery/Gallery'
import Pricing from './Pages/Pricing/Pricing'
import Offers from './Pages/Offers/Offers'
import Contact from './Pages/Contact/Contact'
import Booking from './Pages/Booking/Booking'

// Women's service pages
import HairStylingPage from './SubPage/HairStylingPage/HairStylingPage'
import SkinFacialPage from './SubPage/SkinFacialPage/SkinFacialPage'
import MakeupBridalPage from './SubPage/MakeupBridalPage/MakeupBridalPage'
import NailStudioPage from './SubPage/NailStudioPage/NailStudioPage'
import WaxingThreadingPage from './SubPage/WaxingThreadingPage/WaxingThreadingPage'
import ManicurePedicurePage from './SubPage/ManicurePedicurePage/ManicurePedicurePage'
import BodySpaPage from './SubPage/BodySpaPage/BodySpaPage'
import BridalGroomPackagesPage from './SubPage/BridalGroomPackagesPage/BridalGroomPackagesPage'

// Men's service pages
import MensGroomingPage from './SubPage/MensGroomingPage/MensGroomingPage'
import MensSkinCarePage from './SubPage/MensSkinCarePage/MensSkinCarePage'

// Women's pricing pages
import HairPricing from './Pages/PricingSubPage/HairPricing/HairPricing'
import FacialPricing from './Pages/PricingSubPage/FacialPricing/FacialPricing'
import MakeupPricing from './Pages/PricingSubPage/MakeupPricing/MakeupPricing'
import NailPricing from './Pages/PricingSubPage/NailPricing/NailPricing'
import WaxingPricing from './Pages/PricingSubPage/WaxingPricing/WaxingPricing'
import PedicureManicurePricing from './Pages/PricingSubPage/PedicureManicurePricing/PedicureManicurePricing'
import BodyTreatmentsPricing from './Pages/PricingSubPage/BodyTreatmentsPricing/BodyTreatmentsPricing'
import PackagesPricing from './Pages/PricingSubPage/PackagesPricing/PackagesPricing'

// Men's pricing pages
import MensGroomingPricing from './Pages/PricingSubPage/MensGroomingPricing/MensGroomingPricing'
import MensHairPage from './SubPage/MensHairPage/MensHairPage'
import MensPedicurePage from './SubPage/MensPedicurePage/MensPedicurePage'
import MensBodyTreatmentsPage from './SubPage/MensBodyTreatmentsPage/MensBodyTreatmentsPage'
import MensGroomMakeupPage from './SubPage/MensGroomMakeupPage/MensGroomMakeupPage'
import MensPreGroomPackagePage from './SubPage/MensPreGroomPackagePage/MensPreGroomPackagePage'

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />

          {/* WOMEN'S SERVICES */}
          <Route path="/services/women/hair" element={<HairStylingPage />} />
          <Route path="/services/women/skin" element={<SkinFacialPage />} />
          <Route path="/services/women/makeup" element={<MakeupBridalPage />} />
          <Route path="/services/women/nails" element={<NailStudioPage />} />
          <Route path="/services/women/waxing" element={<WaxingThreadingPage />} />
          <Route path="/services/women/pedicure" element={<ManicurePedicurePage />} />
          <Route path="/services/women/body-spa" element={<BodySpaPage />} />
          <Route path="/services/women/packages" element={<BridalGroomPackagesPage />} />

          {/* MEN'S SERVICES */}
          <Route path="/services/men/hair" element={<MensGroomingPage />} />
          <Route path="/services/men/grooming" element={<MensGroomingPage />} />
          <Route path="/services/men/skin" element={<MensSkinCarePage />} />
          <Route
  path="/services/men/pedicure"
  element={<MensPedicurePage />}
/>
<Route
  path="/services/men/body-spa"
  element={<MensBodyTreatmentsPage />}
/>
<Route
  path="/services/men/groom-makeup"
  element={<MensGroomMakeupPage />}
/>
<Route
  path="/services/men/packages"
  element={<MensPreGroomPackagePage />}
/>
          
          
          
          

          {/* WOMEN'S PRICING */}
          <Route path="/pricing/women/hair" element={<HairPricing />} />
          <Route path="/pricing/women/skin" element={<FacialPricing />} />
          <Route path="/pricing/women/makeup" element={<MakeupPricing />} />
          <Route path="/pricing/women/nails" element={<NailPricing />} />
          <Route path="/pricing/women/waxing-threading" element={<WaxingPricing />} />
          <Route path="/pricing/women/pedicure-manicure" element={<PedicureManicurePricing />} />
          <Route path="/pricing/women/body-treatments" element={<BodyTreatmentsPricing />} />
          <Route path="/pricing/women/packages" element={<PackagesPricing />} />

          {/* MEN'S PRICING */}
          <Route path="/pricing/men/hair" element={<MensGroomingPricing />} />
          <Route path="/services/men/hair" element={<MensHairPage />} />

          <Route path="/pricing/men/grooming" element={<MensGroomingPricing />} />
          <Route path="/pricing/men/skin" element={<FacialPricing />} />
          <Route path="/pricing/men/pedicure-manicure" element={<PedicureManicurePricing />} />
          <Route path="/pricing/men/body-treatments" element={<BodyTreatmentsPricing />} />
          <Route path="/pricing/men/groom-makeup" element={<MakeupPricing />} />
          <Route path="/pricing/men/packages" element={<PackagesPricing />} />

          {/* OLD SERVICE URL REDIRECTS */}
          <Route path="/services/hair" element={<Navigate to="/services/women/hair" replace />} />
          <Route path="/services/grooming" element={<Navigate to="/services/men/grooming" replace />} />
          <Route path="/services/mens-skin" element={<Navigate to="/services/men/skin" replace />} />
          <Route path="/services/skin" element={<Navigate to="/services/women/skin" replace />} />
          <Route path="/services/makeup" element={<Navigate to="/services/women/makeup" replace />} />
          <Route path="/services/nails" element={<Navigate to="/services/women/nails" replace />} />
          <Route path="/services/waxing" element={<Navigate to="/services/women/waxing" replace />} />
          <Route path="/services/pedicure" element={<Navigate to="/services/women/pedicure" replace />} />
          <Route path="/services/body-spa" element={<Navigate to="/services/women/body-spa" replace />} />
          <Route path="/services/packages" element={<Navigate to="/services/women/packages" replace />} />

          {/* OLD PRICING URL REDIRECTS */}
          <Route path="/pricing/hair" element={<Navigate to="/pricing/women/hair" replace />} />
          <Route path="/pricing/grooming" element={<Navigate to="/pricing/men/grooming" replace />} />
          <Route path="/pricing/skin" element={<Navigate to="/pricing/women/skin" replace />} />
          <Route path="/pricing/makeup" element={<Navigate to="/pricing/women/makeup" replace />} />
          <Route path="/pricing/nails" element={<Navigate to="/pricing/women/nails" replace />} />
          <Route path="/pricing/waxing-threading" element={<Navigate to="/pricing/women/waxing-threading" replace />} />
          <Route path="/pricing/pedicure-manicure" element={<Navigate to="/pricing/women/pedicure-manicure" replace />} />
          <Route path="/pricing/body-treatments" element={<Navigate to="/pricing/women/body-treatments" replace />} />
          <Route path="/pricing/packages" element={<Navigate to="/pricing/women/packages" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <AIFloatingButton />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
