import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import Header from './Header'
import Footer from './Footer'

// Pages
import Home from '../pages/Home/'
import About from '../pages/About/'
import Fichelogement from '../pages/Fichelogement'
import NotFound from '../pages/NotFound'

import '../styles/App.css'

function App() {
  return (
    <React.StrictMode>
      <div>
        <div className="container">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fiche/:id" element={<Fichelogement />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </React.StrictMode>
  )
}

export default App
