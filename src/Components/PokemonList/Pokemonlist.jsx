import React from 'react'
import './Pokemonlist.css'
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';
const Pokemonlist = () => {
  const DefalutUrl="https://pokeapi.co/api/v2/pokemon";

const [pokemonListState,setPokemonListState]=usePokemonList(DefalutUrl);
    
  return (
    <>
    <div className="pokemon-list-wrapper">
        <div>
        <h1>Pokemon list</h1>
        </div>
        <div className="page-controls">
            <button onClick={()=>setPokemonListState({...pokemonListState,PokedexURL:pokemonListState.prevUrl})}>Prev</button>
            <button onClick={()=>setPokemonListState({...pokemonListState,PokedexURL:pokemonListState.nextUrl})}>Next</button>
        </div>
        <div className="pokemon-list">
        {pokemonListState.pokemonList.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)}
        </div>
    </div>
    </>
  );
}

export default Pokemonlist
