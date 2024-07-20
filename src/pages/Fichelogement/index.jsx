import React from 'react'
import { useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import Fiche from '../../components/Fiche'

import data from '../../data/logements.json'

function Fichelogement() {
  // GET ID fiche
  const { id } = useParams()

  console.log(id)

  const navigate = useNavigate()

  // If NO ID
  let selectedfiche = []

  if ((selectedfiche = data.filter((element) => id.includes(element.id)))) {
    console.log('ouch')
  }

  useEffect(() => {
    if (selectedfiche.length === 0) {
      navigate(`/home`)
    }
  })

  // Controle Fiche

  //console.log(selectedfiche.length)

  return (
    <>
      {selectedfiche.length > 0 ? (
        <Fiche
          selectedfiche={{ id: selectedfiche[0].id, data: selectedfiche[0] }}
        />
      ) : (
        <div>Fiche inconnue</div>
      )}
    </>
  )
}

export default Fichelogement
