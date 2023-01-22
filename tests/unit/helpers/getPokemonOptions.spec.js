import { getPokemons }  from '@/helpers/getPokemonOptions'

describe('getPokemonOptions - helpers', () => {
  test('debe regresar un arreglo de numeros', () => {
    const pokemons = getPokemons() 
    expect(pokemons.length).toBe(650)
    expect(pokemons[0]).toBe(1)
    expect(pokemons[150]).toBe(151)
  })
  
  // TODO
  // test('debe de retornar un arreglo de 4 elementes con nombres', () => {})
  // test('getPokemonOptions debe retornar un arreglo mezclado', () => {})
})
