import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { SingleVinylFromList } from '../Components/SingleVinylFromList'
import { VinylType } from '../types'

export function ViewVinyls() {
  const [filterText, setFilterText] = useState('')

  const { data: Vinyls = [] } = useQuery<VinylType[]>(
    ['vinyls', filterText],
    async function () {
      let url = '/api/Vinyls'

      if (filterText.length !== 0) {
        url = `/api/Vinyls?filter=${filterText}`
      }
      const response = await fetch(url)
      return response.json()
    }
  )

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
      <section className="map"></section>

      <ul className="DiffVinyls">
        {Vinyls.map(function (Vinyl) {
          return <SingleVinylFromList key={Vinyl.id} vinyl={Vinyl} />
        })}
      </ul>
    </main>
  )
}
