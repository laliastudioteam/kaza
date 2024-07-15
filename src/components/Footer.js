import '../styles/Footer.css'
import logoFooter from '../assets/logo-white.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-logo">
          <img src={logoFooter} />
        </div>
        <div className="footer-content-baseline">
          © 2020 Kasa. All rights reserved2
        </div>
      </div>
    </div>
  )
}

export default Footer
