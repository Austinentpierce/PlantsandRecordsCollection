import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { VinylType } from '../types'

export function ViewVinyls() {
  const [filterText, setFilterText] = useState('')

  const { data: Vinyls = [] } = useQuery<VinylType[]>(
    ['Vinyls', filterText],
    async function () {
      let url = '/api/Vinyls'

      if (filterText.length !== 0) {
        url = `/api/Vinyls?filter=${filterText}`
      }
      const response = await fetch(url)
      return response.json()
    }
  )
  console.log({ Vinyls })
  return (
    <main className="VinylsPage">
      <input
        className="vinylsearch"
        placeholder="Search Vinyls"
        value={filterText}
        onChange={function (event) {
          setFilterText(event.target.value)
        }}
      />

      <ul className="DiffVinyls">
        {Vinyls.map(function (Vinyls) {
          return (
            <li key={Vinyls.id}>
              <h2 className="TitleName">{Vinyls.album}</h2>
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
