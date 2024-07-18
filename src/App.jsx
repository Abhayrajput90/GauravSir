
import Header from './Coponents/header'
import Footer from './Coponents/footer'
import Spinner from './Coponents/spinner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Coponents/Pages/home'
import AboutPage from './Coponents/Pages/AboutPage'
import ContactPage from './Coponents/Pages/ContactPage'
import MenuPage from './Coponents/Pages/MenuPage'
import BookNow from './Coponents/Pages/BookNow'
import NotFound from './Coponents/Pages/NotFound'
import ServicePage from './Coponents/Pages/ServicePage'
import EventsGallery from './Coponents/Pages/EventsGallery'

function App() {

  return (
    <BrowserRouter>
      <Spinner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/events" element={<EventsGallery />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
