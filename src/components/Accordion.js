import React, { useState } from 'react'
import '../styles/Accordion.css'
import chevron from '../assets/chevron.png'

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <div
          className={
            isOpen ? 'accordion-title-chevron-open' : 'accordion-title-chevron'
          }
        >
          <img src={chevron} className="accordion-title-chevron-img" />
        </div>
      </div>

      {isOpen && (
        <div
          className="accordion-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </div>
  )
}

export default Accordion
