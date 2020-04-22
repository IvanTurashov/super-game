<template>
  <canvas
    ref="canvas"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Game',
  setup() {
    const canvas = ref<HTMLCanvasElement | null>(null);

    const init = () => {
      if (canvas.value) {
        canvas.value.width = 500;
        canvas.value.height = 500;
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
