import pokemonApi from "@/api/pokemonApi"

describe('pokemenApi', () => {
  test('axios debe estar configurado con el api de pokemon', () => {
    const { baseURL } = pokemonApi.defaults
    expect(baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
  })
})
