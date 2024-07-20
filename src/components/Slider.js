import React, { useState } from 'react'
import '../styles/Slider.css'
import BtnSlider from './BtnSlider'

function Slider({ data }) {
  const [pictureIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (pictureIndex !== data.length) {
      setSlideIndex(pictureIndex + 1)
    } else if (pictureIndex === data.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (pictureIndex !== 1) {
      setSlideIndex(pictureIndex - 1)
    } else if (pictureIndex === 1) {
      setSlideIndex(data.length)
    }
  }

  return (
    <div className="slider-container">
      {data.map((obj, index) => {
        const picturebasename = obj.substring(0, obj.length - 5)

        return (
          <div
            key={'id' + picturebasename + index}
            className={
              pictureIndex === index + 1
                ? 'slider-container-slide active-anim'
                : 'slider-container-slide'
            }
          >
            <img
              src={picturebasename + (index + 1) + `.jpg`}
              alt={picturebasename + (index + 1) + `.jpg`}
              key={'image' + picturebasename + index}
            />
          </div>
        )
      })}
      {data.length > 1 && (
        <BtnSlider moveSliderPicture={nextSlide} to={'next'} />
      )}
      {data.length > 1 && (
        <BtnSlider moveSliderPicture={prevSlide} to={'previous'} />
      )}
      {data.length > 1 && (
        <div className="slider-container-text">
          {pictureIndex}/{data.length}
        </div>
      )}
    </div>
  )
}

export default Slider
