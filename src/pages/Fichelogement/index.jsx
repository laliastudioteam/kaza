import React from 'react'

import { useSearchParams, useNavigate } from 'react-router-dom'

import Fiche from '../../components/Fiche'

import data from '../../data/logements.json'

function Fichelogement() {
  // GET ID fiche
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  const navigate = useNavigate()

  // If NO ID

  const selectedfiche = data.filter((element) => id.includes(element.id))

  // Controle Fiche

  if (selectedfiche.length === 0) {
    navigate('./home')
  }

  return (
    <>
      <Fiche
        selectedfiche={{ id: selectedfiche[0].id, data: selectedfiche[0] }}
      />
    </>
  )
}

export default Fichelogement
