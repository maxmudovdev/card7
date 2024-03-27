import React from 'react'

import Cards from './card/Cards'
import { selectAllPosts } from './slice/CardSlice'
import { useSelector } from 'react-redux'
import FilterCard from './filterCard/FilterCard'
const App = () => {
  const card = useSelector(selectAllPosts)
  const renderCard = card.map((item) => <Cards data={item} />)
  return (
    <>
      <FilterCard />

      <div className='container'>
        <div className='row'>{renderCard}</div>
      </div>
    </>
  )
}

export default App
