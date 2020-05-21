<template>
  <canvas
    ref="canvas"
  />
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
    targets: {
      type: Array,
      required: true,
    },
  },

  setup(
    { targets }: { targets: Array<string> },
  ) {
    const canvas = ref<HTMLCanvasElement | null>(null);
    const game = ref<CoreGame>(null);

    const init = () => {
      const ctx = canvas.value!.getContext('2d');
      const { innerWidth: width, innerHeight: height } = window;

      game.value = new Game(ctx!, { width, height });
      targets.forEach((target) => game.value!.addTarget(target));
    };

    onMounted(() => {
      init();
    });

    return {
      canvas,
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
