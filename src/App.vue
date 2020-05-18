<template>
  <div id="app">
    <Game />
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

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
