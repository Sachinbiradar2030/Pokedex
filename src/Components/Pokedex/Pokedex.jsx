import React from 'react'
import './Pokedex.css'
import Search from '../Search/Search'
import Pokemonlist from '../PokemonList/Pokemonlist'
import { useState } from 'react'
import Pokemondetails from '../Pokemondetails/Pokemondetails'
const Pokedex = () => {
  const[serachTerm ,setSearchterm]=useState('');
  return (
    <>
    <div className="pokedex-wrapper">
    <h1>POKEDEX</h1>
    <Search updatesearch={setSearchterm}/>
    {serachTerm ?<Pokemondetails pokemonName={serachTerm}/>:<Pokemonlist/>}
    
   </div> 
   </>
  )
}

export default Pokedex
