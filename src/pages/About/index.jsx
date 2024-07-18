import Jumbotron from '../../components/Jumbotron'
import Accordion from '../../components/Accordion'

function About() {
  return (
    <div className="about">
      <Jumbotron
        jumbotron={{
          picture: 'background-about.jpg',
          title: '',
        }}
      />
      <Accordion
        title="Fiabilité"
        content="Les annonces postées sur Kaza garantissent une fiabilité totale.</br>
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <Accordion
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kaza.</br>Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
      />
      <Accordion
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kaza.<br/>Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
      />
      <Accordion
        title="Sécurité"
        content="La sécurité est a priorité de Kaza. </br>Aussi ien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères établis par nos services. </br>En laissant une note aussi bien à lhôte qu'au locataire cela permet à nos équipes de vérifier que les standards sont bien respectés.<br/> Nous organisons également des atelierssur la sécrité domestique pour nos hotes "
      />
    </div>
  )
}

export default About
