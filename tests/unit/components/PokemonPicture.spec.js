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
  
  // TODO
  //test('debe de mostrar la imagen oculta y el pokemon 151', ()=> {})
  //test('dobo de mostrar la imagen del pokemon si showPokemon:true', ()=> {})
})
