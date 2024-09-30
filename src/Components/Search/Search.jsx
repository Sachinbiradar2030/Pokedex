import React from 'react'
import './Search.css'
const Search = ({updatesearch}) => {
  return (
    <>
    <div className="pokemonSearch">
      <input type='search' name="" id="search-pokemon" placeholder='Search Pokemon🔍'
      onChange={(e)=>updatesearch(e.target.value)}

       />
    </div>
    </>
  )
}

export default Search
