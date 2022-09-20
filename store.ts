import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './src/services/pokemon';

/* Este é nosso redux slice onde definimos nosso reducer e suas actions */

export const store = configureStore({
  /* aqui adicionamos nosso reducer */
  reducer: {
    /* passamo aqui um interpolação da nossa pokeApi com o seu nome 'pokemonApi' e ela recebe por sua vez o reducer como definido abaixo */
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  /* esta function serve para podermos aplicar um middleware a nossa api, capturando validações dos dados que serão entregues  */
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})

/* esta função e utilizada para efetuar o dispatch das informações desta store */
setupListeners(store.dispatch)
