import React from 'react'
import { useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import Fiche from '../../components/Fiche'

import data from '../../data/logements.json'

function Fichelogement() {
  // GET ID fiche
  const { id } = useParams()

  const navigate = useNavigate()

  // If NO ID
  let selectedfiche = []

  selectedfiche = data.filter((element) => id.includes(element.id))

  // Controle Fiche

  useEffect(() => {
    if (selectedfiche.length === 0) {
      navigate(`/Unknown`)
    }
  })

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
