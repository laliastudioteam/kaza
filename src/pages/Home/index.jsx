import CardsList from '../../components/CardsList'
import Jumbotron from '../../components/Jumbotron'

import data from '../../data/logements.json'

function Home() {
  return (
    <>
      <Jumbotron
        jumbotron={{
          picture: 'background-jumbotron.jpg',
          title: 'Chez vous, partout et ailleurs',
        }}
      />
      <CardsList dataLogements={data} />
    </>
  )
}

export default Home
