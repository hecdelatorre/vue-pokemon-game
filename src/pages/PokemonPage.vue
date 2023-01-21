<template>
  <h1>¿Quién es este pokemon?</h1>

  <PokemonPicture :pokemonId="6" :showPokemon="false"/>
  <PokemonOptions :pokemons="pokemonArr"/>
  <!-- TODO: img -->
  <!-- TODO: opciones -->
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
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonsOptions()
    }
  },
  mounted() {
    this.mixPokemonArr()
  }
}
</script>

<style>

</style>
