
import {useEffect,useState} from 'react'
import downloadPokemons from '../Util/downloadPokemons';

function usePokemonList(DefalutUrl){

    // const [pokemonList,setPokemonList]=useState([]);
    // const [PokedexURL,setPokedexURL]=useState(DefalutUrl);
    // const[nextUrl,setNextUrl]=useState(DefalutUrl);
    // const[prevUrl,setPrevUrl]=useState(DefalutUrl);

    const[pokemonListState,setPokemonListState]=useState({
      pokemonList:[],
      PokedexURL:DefalutUrl,
      nextUrl:DefalutUrl,
      prevUrl:DefalutUrl
    });
    
   
   
    useEffect(() => {
   
    downloadPokemons(pokemonListState,setPokemonListState,DefalutUrl)
     
    },[pokemonListState.PokedexURL]);
    return[pokemonListState,setPokemonListState];
}
export default usePokemonList;