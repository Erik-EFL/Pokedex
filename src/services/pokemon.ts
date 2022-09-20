/* importação das funções vindas do redux toolkit para o fetch da api */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* Esta é a logica para consumir a api através das funções do toolkit  */
export const pokemonApi = createApi({
  /* ReducerPath é um método vindo da função createApi assim como baseQuery e endpoints */
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  /* O parâmetro do método endpoints recebe uma função com um parâmetro de nome qualquer este por sua vez traz outros parâmetros com sigo como por exemplo o query */
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string | any) => `pokemon/${name}`,
    }),
  }),
})

/* Aqui estamos desestruturando da nossa função pokemonApi um hook que vem diretamente da api para podermos efetuar o dispatch das informações */
export const { useGetPokemonByNameQuery } = pokemonApi
