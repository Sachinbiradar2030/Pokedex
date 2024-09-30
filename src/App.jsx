import { Routes, Route } from 'react-router-dom';
import Pokedex from './Components/Pokedex/Pokedex';
import Pokemondetails from './Components/Pokemondetails/Pokemondetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Pokedex />} />
      <Route path='/pokemon/:id' element={<Pokemondetails />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
