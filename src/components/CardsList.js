import { Link } from 'react-router-dom'
import '../styles/CardsList.css'

function CardsList({ dataLogements }) {
  return (
    <div className="cardsList">
      {dataLogements.map((logement, index) => (
        <div className="cardsList-card" key={logement.id}>
          <Link to={`../fiche/${logement.id}`} className="cardsList-card-link">
            <div
              className="cardsList-card-link-image"
              style={{
                backgroundImage: 'url(' + logement.cover + ')',
                backgroundSize: 'auto',
              }}
            ></div>
            <div className="cardsList-card-link-title" data-id={logement.id}>
              {logement.title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CardsList
