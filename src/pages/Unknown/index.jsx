import CardsList from '../../components/CardsList'
import Jumbotron from '../../components/Jumbotron'
import Fiche from '../../components/Fiche'
import data from '../../data/logements.json'

function Unknown() {
  return (
    <>
      <Jumbotron />
      <CardsList dataLogements={data} />
    </>
  )
}

export default Unknown
