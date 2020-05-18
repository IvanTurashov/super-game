<template>
  <b-container fluid>
    <b-row>
      <div class="w-75">
        <canvas
          ref="canvas"
        />
      </div>

      <b-col>
        <target-creator @add-targets="addTargets" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { BContainer, BRow, BCol } from 'bootstrap-vue';
import Game from '@/Game/CoreGame';
import { CoreGame } from '@/types/Core';

import TargetCreator from '@/components/TargetCreator.vue';

export default defineComponent({
  name: 'Game',

  components: {
    TargetCreator,
    BContainer,
    BRow,
    BCol,
  },

  setup() {
    const canvas = ref<HTMLCanvasElement | null>(null);
    const game = ref<CoreGame>(null);

    const init = () => {
      const ctx = canvas.value!.getContext('2d');
      const { width } = canvas.value!.parentElement!.getBoundingClientRect();

      game.value = new Game(ctx!, { width, height: window.innerHeight });
    };

    onMounted(() => {
      init();
    });

    const addTargets = (targets: Array<string>) => {
      targets.forEach((target) => game.value!.addTarget(target));
    };

    return {
      canvas,
      addTargets,
    };
  },
});
</script>

<style scoped>
canvas {
  vertical-align: top;
  background-color: antiquewhite;
}
</style>
