<template>
  <canvas
    ref="canvas"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import Game from '@/Game/CoreGame';
import { CoreGame } from '@/types/Core';

export default defineComponent({
  name: 'Game',
  setup() {
    const canvas = ref<HTMLCanvasElement | null>(null);
    const game = ref<CoreGame>(null);

    const init = () => {
      const ctx = canvas.value && canvas.value.getContext('2d');
      if (ctx) {
        game.value = new Game(ctx, { width: 500, height: 500 });
        game.value.render();
      }
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
  background-color: antiquewhite;
}
</style>
