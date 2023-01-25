import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'

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

})
