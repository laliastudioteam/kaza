import '../styles/Fiche.css'
import starActive from '../assets/star-active.png'
import starInactive from '../assets/star-inactive.png'

import Accordion from '../components/Accordion'
import Slider from '../components/Slider'

function Fiche(dataFiche) {
  const fichedata = dataFiche.selectedfiche.data
  const fichehost = dataFiche.selectedfiche.data.host
  const maxNumberRating = 5

  const sliderOrCover = 'pictures'

  let ficheequipements = '<ul class="fiche-content-list-equipements">'

  fichedata.equipments.map(
    (equipment, index) =>
      (ficheequipements +=
        '<li class="fiche-content-list-equipements-equipement">' +
        equipment +
        '</li>'),
  )

  ficheequipements += '</ul>'

  return (
    <div className="fiche">
      {sliderOrCover === 'cover' && (
        <img className="fiche-cover" src={`${fichedata.cover}`} alt="cover" />
      )}
      {sliderOrCover === 'pictures' && <Slider data={fichedata.pictures} />}
      <div className="fiche-content">
        <div className="fiche-content-left">
          <div className="fiche-content-left-title-zone">
            <div className="fiche-content-left-title-zone-title">
              {fichedata.title}
            </div>
            <div className="fiche-content-left-title-zone-location">
              {fichedata.location}
            </div>
            <div className="fiche-content-left-tags-zone">
              <div className="fiche-content-left-tags-zone">
                <ul className="fiche-content-left-tags-zone-list">
                  {fichedata.tags.map((element, index) => {
                    return (
                      <li
                        className="fiche-content-left-tags-zone-list-tag"
                        key={index}
                      >
                        {element}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="fiche-content-right">
          <div className="fiche-content-right-host-zone">
            <div className="fiche-content-right-host-zone-name">
              {fichehost.name}
            </div>
            <img
              className="fiche-content-right-host-zone-picture"
              src={`${fichehost.picture}`}
              alt={fichehost.name}
            />
          </div>
          <div className="fiche-content-right-host-ratings">
            {[...Array(maxNumberRating).keys()].map((element) => {
              if (Number(fichedata.rating >= element + 1)) {
                return (
                  <img
                    src={starActive}
                    alt="star active"
                    className="fiche-content-host-right-ratings"
                    key={'star' + element + 1}
                  />
                )
              } else {
                return (
                  <img
                    src={starInactive}
                    alt="star inactive"
                    className="fiche-content-host-right-ratings"
                    key={'star' + element + 1}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
      <div className="fiche-content">
        <div className="fiche-content-left">
          <Accordion title="Description" content={fichedata.description} />
        </div>{' '}
        <div className="fiche-content-right">
          <Accordion title="Equipements" content={ficheequipements} />
        </div>
      </div>
    </div>
  )
}

export default Fiche
