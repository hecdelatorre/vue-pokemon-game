import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons
      }
    })
  })

  test('debe de hacer match con el snapshot', () => {
    // console.log(wrapper.html())
    expect(wrapper.html()).toMatchSnapshot()
    //expect(wrapper.html()).toMatchInlineSnapshot()
  })

  test('debe de mostrar las 4 opciones correctamente', () => {
    const [pk1, pk2, pk3, pk4] = wrapper.findAll('li')
    expect(pk1.text()).toBe('bulbasaur')
    expect(pk2.text()).toBe('ivysaur')
    expect(pk3.text()).toBe('venusaur')
    expect(pk4.text()).toBe('charmander')
  })
  
  test('debe de emitir "selection" con sus respectivos parametros al hacer clic', () => {
    const [pk1, pk2, pk3, pk4] = wrapper.findAll('li')
    pk1.trigger('click')
    pk2.trigger('click')
    pk3.trigger('click')
    pk4.trigger('click')
    console.log(wrapper.emitted('selection'))
    
    const [ sE1, sE2, sE3, sE4 ] = wrapper.emitted('selection')
    expect(sE1).toEqual([1])
    expect(sE2).toEqual([2])
    expect(sE3).toEqual([3])
    expect(sE4).toEqual([4])
    expect(wrapper.emitted('selection').length).toBe(4)
  })

})
