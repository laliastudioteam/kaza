import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import Header from './Header'
import Footer from './Footer'

// Pages
import Home from '../pages/Home/'
import About from '../pages/About/'
import Fichelogement from '../pages/Fichelogement'
import Unknown from '../pages/Unknown'

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
              <Route path="/home" element={<Home />} />
              <Route path="/fiche" element={<Fichelogement />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Unknown />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </React.StrictMode>
  )
}

export default App