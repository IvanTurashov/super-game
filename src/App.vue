<template>
  <div id="app">
    <Game />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Game from './components/Game.vue';

export default defineComponent({
  name: 'App',
  components: {
    Game,
  },
});
</script>

<style>
html, body, #app {
  height: 100%;
}

body {
  margin: 0;
}
</style>
