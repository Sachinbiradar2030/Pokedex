import axios from 'axios';
async function downloadPokemons(pokemonListState,setPokemonListState,DefalutUrl,limit=20){
          const response=await axios.get(pokemonListState.PokedexURL? pokemonListState.PokedexURL:DefalutUrl);
       let pokemonResult=response.data.results ?response.data.results:response.data.pokemon;//array of arra
       pokemonResult=pokemonResult.slice(0,limit);

      //  setNextUrl(response.data.next);
      //  setPrevUrl(response.data.previous)
      // setPokemonListState((state)=>({...state,pokemonListState,nextUrl:response.data.next,prevUrl:response.data.previous}))

       const pokemonPromise=pokemonResult.map((p,idx)=>{
        if(p.url){
            return axios.get(p.url)
        }
        else if(p.pokemon.url){
            return axios.get(p.pokemon.url);

        }
     });

       const pokemonListdata=await axios.all(pokemonPromise);
       console.log(pokemonListdata);

       const pokemonFinlList=pokemonListdata.map(pokemonData => {
        const pokemon=pokemonData.data;

        return{
            id:pokemon.id,
            name:pokemon.name,
            image:pokemon.sprites.other.dream_world.front_default,
            types:pokemon.types
        }
       });
      
       
// setPokemonList(pokemonFinlList)  ;     
setPokemonListState((state)=>({...state,pokemonListState,pokemonList:pokemonFinlList,nextUrl:response.data.next,prevUrl:response.data.previous}))
    }
    export default downloadPokemons;