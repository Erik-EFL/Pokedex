import './App.css'
import { useGetPokemonByNameQuery } from './services/pokemon'
import { useState } from 'react';

function App() {
  /* estado que armazena o nome capturado no input search */
  const [pokeName, setPokeName] = useState<string>('ditto')
  /* hook da vindo da pokeApi que recebe o estado pokeName,
  este hook traz funções da api como as listadas abaixo */
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokeName)

  /* função que captura os estado do input e seta o valor no pokeName */
  const handleChange = (event: any) => {
    const { value } = event.target
    value
    ? setPokeName(value)
    : setPokeName('ditto')
  }

  return (
    <div className="App">
      <input
        type="text"
        name="search"
        id="search"
        onChange={ handleChange }
      />
      {/* logica para exibir as funções vindas da api */}
      {error ? (
          <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : data}
    </div>
  )
}

export default App
