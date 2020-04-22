<template>
  <div id="app">
    <Game />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Game from './components/Game.vue';

@Component({
  components: {
    Game,
  },
})
export default class App extends Vue {}
</script>

<style>
html, body, #app {
  height: 100%;
}

body {
  margin: 0;
}
</style>
