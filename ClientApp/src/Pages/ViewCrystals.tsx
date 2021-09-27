import React from 'react'
import { useQuery } from 'react-query'
import { CrystalType } from '../types'

export function ViewCrystals() {
  const { data: crystals = [] } = useQuery<CrystalType[]>(
    'crystals',
    async function () {
      const response = await fetch('/api/Crystals')

      return response.json()
    }
  )
  console.log({ crystals })
  return (
    <main className="CrystalsPage">
      <input className="crystalsearch" placeholder="Search Crystals" />

      <ul className="DiffCrystals">
        {crystals.map(function (Crystals) {
          return (
            <li key={Crystals.id}>
              <h2 className="CrystalName">{Crystals.name}</h2>
              <p>{Crystals.size}</p>
              <p>{Crystals.color}</p>
              <p>{Crystals.description}</p>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
