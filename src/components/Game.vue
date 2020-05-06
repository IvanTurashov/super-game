
<template>
  <div>
    <canvas
      ref="canvas"
    />

    <target-creator
      @click="addTarget"
    />
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import Game from '@/Game/CoreGame';
import { CoreGame } from '@/types/Core';

import TargetCreator from '@/components/TargetCreator.vue';
import { gameConfig } from '@/gameConfig.ts';

export default defineComponent({
  name: 'Game',

  components: {
    TargetCreator,
  },

  setup() {
    const canvas = ref<HTMLCanvasElement | null>(null);
    const game = ref<CoreGame>(null);

    const init = () => {
      const ctx = canvas.value!.getContext('2d');
      game.value = new Game(ctx!, gameConfig);
    };

    onMounted(() => {
      init();
    });

    const addTarget = () => {
      game.value!.addTarget();
    };

    return {
      canvas,
      addTarget,
    };
  },
});
</script>

<style scoped>
canvas {
  background-color: antiquewhite;
}
</style>
