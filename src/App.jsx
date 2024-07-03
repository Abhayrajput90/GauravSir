
import Header from './Coponents/header'
import Footer from './Coponents/footer'
import Spinner from './Coponents/spinner'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Coponents/Pages/home'

function App() {

  return (
    <BrowserRouter>
      <Spinner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
