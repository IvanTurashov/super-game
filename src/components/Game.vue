<template>
<div class="game">
  <div class="game__background"/>
  <canvas
    class="game__canvas"
    ref="canvas"
  />
</div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import Game from '@/Game/CoreGame';
import { CoreGame } from '@/types/Core';

import TargetCreator from '@/components/TargetCreator.vue';

export default defineComponent({
  name: 'Game',

  components: {
    TargetCreator,
  },

  props: {
    targetKeys: {
      type: Array,
      required: true,
    },
  },

  setup(
    { targetKeys }: { targetKeys: Array<string> },
    { emit },
  ) {
    const canvas = ref<HTMLCanvasElement>({});
    const game = ref<CoreGame>(null);

    const init = () => {
      const ctx = canvas.value.getContext('2d');
      const { innerWidth: width, innerHeight: height } = window;

      game.value = new Game(ctx!, { width, height });
      targetKeys.forEach((key) => game.value!.addTarget(key));
    };

    onMounted(() => {
      init();

      canvas.value.addEventListener('win', (e) => {
        emit('win', (e as CustomEvent).detail.winnerName);
      });
    });

    return {
      canvas,
    };
  },
});
</script>

<style scoped>
.game {
  position: relative;
}
.game__background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/BACKGROUND.png');
  background-size: cover;
}
.game__canvas {
  position: relative;
  z-index: 1;
  vertical-align: top;
}


</style>
