import getPokemonsOptions, { getPokemons, getPokemonsNames }  from '@/helpers/getPokemonOptions'

describe('getPokemonOptions - helpers', () => {
  test('debe regresar un arreglo de numeros', () => {
    const pokemons = getPokemons() 
    expect(pokemons.length).toBe(650)
    expect(pokemons[0]).toBe(1)
    expect(pokemons[150]).toBe(151)
  })
  
  test('debe de retornar un arreglo de 4 elementes con nombres', async() => {

    const namesPokemons = await getPokemonsNames([1,2,3,4])
    console.table(namesPokemons)

    expect(namesPokemons).toStrictEqual([
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 }
    ])
  })
  
  test('getPokemonOptions debe retornar un arreglo mezclado', async() => {
    const pokemons = await getPokemonsOptions()
    console.table(pokemons)

    expect(pokemons.length).toBe(4)

    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) }
    ])

  })
})
