import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { SingleCrystalFromList } from '../Components/SingleCrystalFromList'
import { CrystalType } from '../types'

export function ViewCrystals() {
  const [filterText, setFilterText] = useState('')

  const { data: Crystals = [] } = useQuery<CrystalType[]>(
    ['crystals', filterText],
    async function () {
      let url = '/api/Crystals'

      if (filterText.length !== 0) {
        url = `/api/Crystals?filter=${filterText}`
      }

      const response = await fetch(url)
      return response.json()
    }
  )
  console.log({ Crystals })
  return (
    <main className="CrystalsPage">
      <input
        className="crystalsearch"
        placeholder="Search Crystals"
        value={filterText}
        onChange={function (event) {
          setFilterText(event.target.value)
        }}
      />

      <ul className="DiffCrystals">
        {Crystals.map(function (Crystal) {
          return <SingleCrystalFromList key={Crystal.id} crystal={Crystal} />
        })}
      </ul>
    </main>
  )
}
