import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })

  test('debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de llamar mixPokemonArr al mount', () => {
    const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr')
    shallowMount(PokemonPage)
    expect(mixPokemonArraySpy).toHaveBeenCalled()
  })

  test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
    //const wrapper = mount(PokemonPage, {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de mostrar los componentes de PokemonPictere y PokemonOptions', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: true,
          showAnswer: false,
          message: ''
        }
      }
    })

  const picture = wrapper.find('pokemon-picture-stub'),
        options = wrapper.find('pokemon-options-stub')
  
  expect(picture.exists()).toBeTruthy()
  expect(options.exists()).toBe(true)
  expect(picture.attributes('pokemonid')).toBe('1')
  expect(options.attributes('pokemons')).toBeTruthy()
  })
  
  test('Pruebas con checkAnswer', async() => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[3],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    await wrapper.vm.checkAnswer(4)
    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBeTruthy()
    expect(wrapper.find('h2').text()).toBe(`Correcto, ${pokemons[3].name}`)
    
    await wrapper.vm.checkAnswer(1)
    expect(wrapper.vm.message).toBe(`Oops, era ${pokemons[3].name}`
)


  })

})
