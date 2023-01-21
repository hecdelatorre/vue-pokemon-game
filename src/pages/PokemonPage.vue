<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonsOptions from '@/helpers/getPokemonOptions'
// console.log(getPokemonsOptions())

export default {
  components: { PokemonOptions, PokemonPicture },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonsOptions()
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[ rndInt ]
    },
    checkAnswer(pokemonId) {
      console.log(pokemonId)
      this.showPokemon = true
    }
  },
  mounted() {
    this.mixPokemonArr()
  }
}
</script>

<style>

</style>
