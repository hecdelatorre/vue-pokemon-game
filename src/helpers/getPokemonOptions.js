import pokemonApi from "@/api/pokemonApi"

export const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650))
  return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonsOptions = async() => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  const pokemons = await getPokemonsNames(mixedPokemons.slice(0, 4))
  //console.table(pokemons)
  return pokemons
}

export const getPokemonsNames = async([a, b, c, d] = []) => {
  // const resp = await pokemonApi.get(`/7`)
  // console.log(resp.data.name, resp.data.id)
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`)
  ]
  const [pkA, pkB, pkC, pkD] = await Promise.all(promiseArr)

  const { name: nameA, id: idA } = pkA.data,
        { name: nameB, id: idB } = pkB.data,
        { name: nameC, id: idC } = pkC.data,
        { name: nameD, id: idD } = pkD.data
  
  return [
    { name: nameA, id: idA },
    { name: nameB, id: idB },
    { name: nameC, id: idC },
    { name: nameD, id: idD }
  ]
}

export default getPokemonsOptions
