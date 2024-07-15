import React from 'react'
import '../styles/BtnSlider.css'
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'

export default function BtnSlider({ to, moveSliderPicture }) {
  return (
    <button
      onClick={moveSliderPicture}
      className={to === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img
        src={to === 'next' ? rightArrow : leftArrow}
        alt={to === 'next' ? rightArrow : leftArrow}
      />
    </button>
  )
}
