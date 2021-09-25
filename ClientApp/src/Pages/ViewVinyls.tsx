import React from 'react'
import { useQuery } from 'react-query'
import { VinylType } from '../types'

export function ViewVinyls() {
  const { data: Vinyls = [] } = useQuery<VinylType[]>(
    'Vinyls',
    async function () {
      const response = await fetch('/api/Vinyls')
      return response.json()
    }
  )
  console.log({ Vinyls })
  return (
    <main className="VinylsPage">
      <input className="vinylsearch" placeholder="Search Vinyls" />

      <ul className="DiffVinyls">
        {Vinyls.map(function (Vinyls) {
          return (
            <li key={Vinyls.id}>
              <h2 className="VinylName">{Vinyls.Album}</h2>
              <p>{Vinyls.Artist}</p>
              <p>{Vinyls.ReleaseYear}</p>
              <p>{Vinyls.Genre}</p>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
