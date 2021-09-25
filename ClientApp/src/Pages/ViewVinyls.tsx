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
              <h2 className="VinylName">The name of the album is</h2>
              <p>{Vinyls.artist}</p>
              <p>{Vinyls.releaseYear}</p>
              <p>{Vinyls.genre}</p>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
