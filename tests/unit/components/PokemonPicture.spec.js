import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture', () => {
  test('debe de hacer match con el snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    })  
    expect(wrapper.html()).toMatchSnapshot()
  })
  
  test('debe de mostrar la imagen oculta y el pokemon 151', ()=> {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 151,
        showPokemon: false
      }
    })
    const [ img1, img2 ] = wrapper.findAll('img')
    expect(img1.exists()).toBeTruthy()
    expect(img2).toBe(undefined)

    //expect(img1.classes('hidden-pokemon')).toBeTruthy()
    expect(img1.classes('hidden-pokemon')).toBe(true)
    expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg')

  })
  
  test('debe de mostrar la imagen del pokemon si showPokemon:true', ()=> {
     const wrapperi = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 151,
        showPokemon: true
      }
    })
    const img1 = wrapperi.find('img')
    expect(img1.exists()).toBeTruthy()
    

  })
})
