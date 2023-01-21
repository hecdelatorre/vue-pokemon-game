<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>
    
    <template class="fade-in" v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonsOptions from '@/helpers/getPokemonOptions'

export default {
  components: { PokemonOptions, PokemonPicture },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonsOptions()
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[ rndInt ]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true
      if (selectedId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`
      } else {
        this.message = `Oops, era ${this.pokemon.name}`
      }
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArr()
    }
  },
  mounted() {
    this.mixPokemonArr()
  }
}
</script>

<style scoped>
button {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);    
  cursor: pointer;
  margin-bottom: 10px;
  width: 100px;
  justify-content: center;
}

button:hover {    
  background-color: rgba(0, 0, 0, 0.05);
}

  /* 
display: flex;

   */
</style>
