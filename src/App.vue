<template>
  <div id="app">
    <Game
      v-if="isTargetsAdded"
      :targets="targets"
    />

    <div
      v-else
      class="h-100 d-flex flex-row justify-content-center align-items-center"
    >
      <target-creator
        class="w-25"
        v-model="targets"
      />
    </div>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { defineComponent, ref, computed } from '@vue/composition-api';
import Game from '@/components/Game.vue';
import TargetCreator from '@/components/TargetCreator.vue';

export default defineComponent({
  name: 'App',
  components: {
    Game,
    TargetCreator,
  },

  setup() {
    const targets = ref([]);
    const isTargetsAdded = computed(() => targets.value.length > 0);

    return {
      targets,
      isTargetsAdded,
    };
  },
});
</script>

<style>
html, body, #app {
  height: 100%;
}


body {
  margin: 0;
  background: radial-gradient(circle, rgba(252, 247, 174, 1) 0%, rgba(223, 197, 75, 1) 100%);
}
</style>
